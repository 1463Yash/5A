 let progress = 0;
        const progressBar = document.getElementById('progress');
        document.getElementById('btn').addEventListener('click', function() {
            if (progress < 100) {
                progress += 10;}
                if (progress > 100){ progress = 100;}
                progressBar.style.width = progress + '%';
            }
        );