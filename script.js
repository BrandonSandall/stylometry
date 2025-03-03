document.addEventListener('DOMContentLoaded', function() {
    // Bible Chart: Bar chart for average sentence lengths
    if (document.getElementById('bibleChart')) {
        const bibleCtx = document.getElementById('bibleChart').getContext('2d');
        new Chart(bibleCtx, {
            type: 'bar',
            data: {
                labels: ['Paul', 'John', 'Isaiah'],
                datasets: [{
                    label: 'Average Sentence Length',
                    data: [15, 20, 18], // Example data (replace with real data)
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Book of Mormon Chart: Line graph for stylistic shifts
    if (document.getElementById('bomChart')) {
        const bomCtx = document.getElementById('bomChart').getContext('2d');
        new Chart(bomCtx, {
            type: 'line',
            data: {
                labels: ['Nephi', 'Alma', 'Mormon'],
                datasets: [{
                    label: 'Word Frequency Variation',
                    data: [0.5, 0.7, 0.6], // Example data (replace with real data)
                    borderColor: '#ff6384',
                    fill: false
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
