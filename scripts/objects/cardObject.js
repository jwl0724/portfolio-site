class card {

    projectDescription;
    projectGenre;
    projectImageGif;
    projectImageStatic;
    projectName;

    constructor (projectDataArray) {
        this.projectName = projectDataArray[0];
        this.projectGenre = projectDataArray[1];
        this.projectImageStatic = projectDataArray[2];
        this.projectDescription = projectDataArray[4];

        // if there is no gif, set it to null
        if (projectDataArray[3] == '') {
            this.projectImageGif = null;
        } else {
            this.projectImageGif = projectDataArray[3];
        }
    }
}