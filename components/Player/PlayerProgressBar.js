import { colors, fontSize } from '../../constants/tokens'
import { formatSecondsToMinutes } from '../../helpers/miscellaneous'
import { defaultStyles, utilsStyles } from '../../styles/index'
import { StyleSheet, Text, View, ViewProps } from 'react-native'
import { Slider } from 'react-native-awesome-slider'
import { useSharedValue } from 'react-native-reanimated'
import TrackPlayer, { useProgress } from 'react-native-track-player'

export const PlayerProgressBar = ({ style }) => {
	const { duration, position } = useProgress()
	const isSliding = useSharedValue(false)
	const progress = useSharedValue(0)
	const min = useSharedValue(0)
	const max = useSharedValue(1)

	const trackElapsedTime = formatSecondsToMinutes(position)
	const trackRemainingTime = formatSecondsToMinutes(duration - position)

	if (!isSliding.value) {
		progress.value = duration > 0 ? position / duration : 0
	}

	return (
		<View style={style}>

            <View style={styles.timeRow}>
				<Text style={[styles.timeText,{color:'#fff'}]}>
                    {trackElapsedTime}
                </Text>

				<Text style={[styles.timeText, {color:"rgba(255,255,255,0.5)"}]}>
					{trackRemainingTime}
				</Text>
			</View>

			<Slider
				progress={progress}
				minimumValue={min}
				maximumValue={max}
				containerStyle={utilsStyles.slider}
				thumbWidth={0}
				renderBubble={() => null}
				theme={{
					minimumTrackTintColor: colors.minimumTrackTintColor,
					maximumTrackTintColor: colors.maximumTrackTintColor,
				}}
				onSlidingStart={() => (isSliding.value = true)}
				onValueChange={async (value) => {
					await TrackPlayer.seekTo(value * duration)
				}}
				onSlidingComplete={async (value) => {
					// if the user is not sliding, we should not update the position
					if (!isSliding.value) return

					isSliding.value = false

					await TrackPlayer.seekTo(value * duration)
				}}
			/>

			
		</View>
	)
}

const styles = StyleSheet.create({
	timeRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		paddingBottom:10
	},
	timeText: {
        
		fontSize:12,
        lineHeight:16,
        fontFamily:'Urbanist-Regular',
		fontWeight: '400',
	},
})