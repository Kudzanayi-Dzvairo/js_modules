let restaurant = {
    name: 'Mereki',
    guestCapacity: 80,
    guest: 90,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guest
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    },
}

const status = restaurant.checkAvailability(4)

console.log(status)
