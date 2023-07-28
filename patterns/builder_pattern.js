//INCOMPLETE

// Product
class Building {
    constructor() {
        this.walls = null
        this.windows = null
        this.door = null
    }
}

// interface AKA abstract class describing each part's building process
class BuildingBuilder {

    set_walls(walls) {

    }

    set_windows(windows) {

    }

    set_door(door) {

    }

    get_result() {

    }

}

// Concrete builder for home
class HomeBuilder extends BuildingBuilder {

    constructor() {
        super();
        this.building = new Building()
    }

    set_walls(walls) {
        this.building.walls = walls
    }

    set_windows(windows) {
        this.building.windows = windows
    }

    set_door(door) {
        this.building.door = door
    }

    get_result() {
        return this.building
    }

}

class OfficeBuilder {

}

class ShoppingMallBuilder {

}

class BuildingDirector {
    constructor(builder) {
        this.builder = builder
    }

    build() {
        this.builder.set_walls("4 walls")
        this.builder.set_windows("2 window")
        this.builder.set_door("1 door")
    }

}

// Lets build a home //
// create obj for HomeBuilder
// create director obj that get HomeBuilder as arg; This has a create/build/construct method. This method makes use of the methods from Builder Class to produce specific features  

const homeBuilder = new HomeBuilder()

const homeBuilding = new BuildingDirector(homeBuilder)

homeBuilding.build()


export { Building }