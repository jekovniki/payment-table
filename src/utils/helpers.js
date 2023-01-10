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

export function formatPaymentTableData(data, formatErrorClass = true) {
    data.type = removeWordFromString(data.type, "Transaction");

    if (formatErrorClass === true) {
        data.error_class = removeWordFromString(data.error_class, "Module::");
        data.error_class = removeWordFromString(data.error_class, "Error");
    }
    data.amount = formatPaymentAmount(data.amount, data.currency);
    data.original_created_at = data.created_at;
    data.created_at = formatDate(data.created_at);
    data.url = `merchant/${data.id}`

    return data;
}

export function formatDateForSorting(dateString) {
    return dateString.startsWith("20") ? dateString : `20${dateString}`;
}
