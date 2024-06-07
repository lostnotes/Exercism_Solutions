// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
    this.width = width,
    this.height = height
}
Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x = 0, y = 0) {
    this.x = x,
    this.y = y
}
Position.prototype.move = function (newX, newY) {
    this.x = newX; 
    this.y = newY;
}

export class ProgramWindow {
    screenSize = new Size(800, 600);
    size = new Size();
    position = new Position();

    resize(newSize = new Size) {
        let newWidth = newSize.width;
        let newHeight = newSize.height;
        let maxWidth = this.screenSize.width - this.position.x;
        let maxHeight = this.screenSize.height - this.position.y;
        if (newWidth < 1) {
            newWidth = 1;
        }
        if (newHeight < 1) {
            newHeight = 1;
        }
        if (newWidth > maxWidth) {
            newWidth = maxWidth;
        }
        if (newHeight > maxHeight) {
            newHeight = maxHeight;
        }
        this.size.resize(newWidth, newHeight);
    }
    move(newPosition = new Position) {
        let newX = newPosition.x;
        let newY = newPosition.y;
        let maxX = this.screenSize.width - this.size.width;
        let maxY = this.screenSize.height - this.size.height;
        if (newY < 0) {
            newY = 0;
        }
        if (newX < 0) {
            newX = 0;
        }
        if (newY > maxY) {
            newY = maxY;
        }
        if (newX > maxX) {
            newX = maxX;
        }
        this.position.move(newX, newY);
    }
}
export function changeWindow(newProgramWindow = new ProgramWindow) {
    newProgramWindow.size.resize(400, 300);
    newProgramWindow.position.move(100, 150);
    return newProgramWindow
}