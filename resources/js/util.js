import { Slide, toast } from "vue3-toastify";

export function extractFieldFromJson(json, field) {
    return JSON.parse(json)[field];
};

export function formatDate(date) {
    if (!date) {
        return null;
    }
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
};

export function calculateMonthDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
};

export function getDateFromToString(startDate, endDate) {
    const fromMonthYear = formatDate(startDate);
    const diffInMonths = calculateMonthDifference(startDate, endDate);

    if (!endDate) {
        const timeString = `( ${diffInMonths} months )`;
        return `From ${fromMonthYear} | Current - ${timeString}`;
    }

    const toMonthYear = formatDate(endDate);

    if (diffInMonths >= 12) {
        const numberOfYears = Math.floor(diffInMonths / 12);
        const remainingMonths = diffInMonths % 12;
        const yearsString = numberOfYears > 1 ? `${numberOfYears} years` : `${numberOfYears} year`;
        const monthsString = remainingMonths > 1 ? `${remainingMonths} months` : `${remainingMonths} month`;
        const timeString = `( ${yearsString} and ${monthsString} )`;
        return `From ${fromMonthYear} | ${toMonthYear} - ${timeString}`;
    }

    const timeString = `( ${diffInMonths} months )`;
    return `From ${fromMonthYear} | ${toMonthYear} - ${timeString}`;
};

export function toastMessage(message, type, duration = 4000, promise = new Promise((resolve, reject) => setTimeout(reject, 3000))) {
    let standardOptions = {
        autoClose: duration,
        transition: Slide,
        theme: localStorage.getItem('selectedTheme').toLocaleLowerCase()
    }

    switch (type) {
        case 'success':
            toast.success(message, standardOptions);
            break;
        case 'error':
            toast.error(message, standardOptions);
            break;
        case 'info':
            toast.info(message, standardOptions);
            break;
        case 'warning':
            toast.warning(message, standardOptions);
            break;
        case 'loading':
            toast.promise(
                promise,
                {
                    pending: 'Processing...',
                    success: message,
                    error: 'Something went wrong!'
                }
            );

        default:
            toast.info(message, standardOptions);
            break;
    }
}

export function redirectTo(route) {
    setTimeout(() => {
        if (route) {
            window.location.href = route;
        } else {
            window.history.back();
        }
    }, 1000);
}

export function formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

