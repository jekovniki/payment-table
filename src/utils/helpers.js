export function formatPaymentTableData(data) {
    data.type = removeWordFromString(data.type, "Transaction");
    data.error_class = removeWordFromString(data.error_class, "Module::");
    data.error_class = removeWordFromString(data.error_class, "Error");
    data.amount = formatPaymentAmount(data.amount, data.currency);
    data.created_at = formatDate(data.created_at);

    return data;
}

function formatPaymentAmount(amount, currency) {
    if (isNaN(amount) === false) {
        return amount = `${amount} ${currency}`;
    }

    return amount;
}

function formatDate(stringDate) {
    if (stringDate.length > 18) {
        return stringDate.substring(2, 16);
    }

    return stringDate;
}

function removeWordFromString(originalString, removedWord) {
    return originalString.replace(removedWord, '');
}