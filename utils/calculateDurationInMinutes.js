function calculateDurationInMinutes(fileSizeInBytes) {
    const bitrateInKbps = 128
    const bitrateInBytesPerSecond = bitrateInKbps * 1000 / 8;
    const durationInSeconds = fileSizeInBytes / bitrateInBytesPerSecond;
    const durationInMinutes = durationInSeconds / 60;
    return durationInMinutes;
}


export default calculateDurationInMinutes