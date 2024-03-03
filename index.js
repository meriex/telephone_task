class Observer {
    update(phoneNumber) {
        console.log(phoneNumber);
    }
}

class DialObserver {
    update(phoneNumber) {
        console.log(`Now Dialling ${phoneNumber}`);
    }
}

class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.observers.forEach(observer => observer.update(phoneNumber));
        } else {
            console.log("Phone number not found");
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
}

const telephone = new Telephone();

const printObserver = new Observer();
const dialObserver = new DialObserver();

telephone.addObserver(printObserver);
telephone.addObserver(dialObserver);

telephone.addPhoneNumber("2347046396475");

telephone.dialPhoneNumber("2347046396475");
