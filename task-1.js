const delay1 = ms => {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved(ms);
        }, ms);
    });
};

const logger1 = time => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay1(2000).then(logger1); // Resolved after 2000ms
delay1(1000).then(logger1); // Resolved after 1000ms
delay1(1500).then(logger1); // Resolved after 1500ms