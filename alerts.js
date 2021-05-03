function showImages(index) {
    switch(index) {
        case 0:
            Swal.fire({
                text: 'The Prompetition Home Page',
                imageUrl: './src/assets/PrompetitionHomePage.PNG',
                width: 800,
                imageWidth: 756,
                imageHeight: 419
            })
            break;
        case 1:
            Swal.mixin({
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                width: 800,
                imageWidth: 756,
                imageHeight: 419,
                progressSteps: ['1', '2']
            }).queue([
                {
                    imageUrl: './src/assets/KeeprHomePage.PNG',
                    text: 'The Home Page of Keepr'
                },
                {
                    imageUrl: './src/assets/KeeprProfilePage.PNG',
                    text: 'A Profile Page on Keepr'
                }
            ])
            break;
        case 2:
            Swal.mixin({
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                width: 800,
                imageWidth: 756,
                imageHeight: 419,
                progressSteps: ['1', '2', '3']
            }).queue([
                {
                    imageUrl: './src/assets/BugLogHomePage.PNG',
                    text: 'The Home Page of Bug Log'
                },
                {
                    imageUrl: './src/assets/BugLogDetailsPage.PNG',
                    text: 'The Details Page of a Bug'
                },
                {
                    imageUrl: './src/assets/BugLogAddingNote.PNG',
                    text: 'Adding a Note onto a Bug'
                }
            ])
            break;
    }
    
}