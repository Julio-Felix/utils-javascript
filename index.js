const formatPhoneNumber = (value) => {
    const cleanValue = value.replace(/\D/g, '').substring(0, 11);
    const nineDigits = cleanValue.length === 11;
    let finalValue = cleanValue.substring(0, 2);
    if (finalValue) {
        finalValue = `(${finalValue}`;
        const part3Begin = nineDigits ? 7 : 6;
        let part2 = cleanValue.substring(2, part3Begin);
        if (part2) {
            if (nineDigits) {
                part2 = `${part2[0]}${part2.substring(1, 6)}`;
            }
            finalValue += `)${part2}`;
            const part3 = cleanValue.substring(part3Begin, 11);
            if (part3) {
                finalValue += `-${part3}`;
            }
        }
    }
    return finalValue;
}