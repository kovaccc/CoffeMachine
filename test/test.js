const CoffeMachine = require("./../app");

let coffeMachine = new CoffeMachine(1, 2, false);

const assert = require("chai").assert;

const sinon = require("sinon");

describe("Coffe Machine Class unit test: ", function () {
  describe("property type checking:", function () {
    it("coffeAmount must be numeric type", function () {
      assert.isNumber(coffeMachine.coffeAmount);
    });

    it("waterAmmount must be numeric type", function () {
      assert.isNumber(coffeMachine.waterAmmount);
    });

    it("powerStatus must be boolean type", function () {
      assert.isBoolean(coffeMachine.powerStatus);
    });
  });

  describe("turnMachineOn() method:", function () {
    it("turnMachineOn() mora vratiti status true Boolean tipa ako je stroj prethodno ugasen", function () {
      coffeMachine.powerStatus = false;
      let machineOn = coffeMachine.turnMachineOn();
      assert.equal(machineOn, true);
      assert.equal(coffeMachine.powerStatus, true);
    });

    it("turnMachineOn() mora vratiti status true Boolean tipa ako je stroj prethodno upaljen i ispisati poruku na konzoli", function () {
      let spy = sinon.spy(console, "log");
      coffeMachine.powerStatus = true;
      let machineOn = coffeMachine.turnMachineOn();
      assert.equal(machineOn, true);
      assert.equal(coffeMachine.powerStatus, true);
      assert(spy.calledWith("Machine is already turned on !"));
      spy.restore();
    });
  });

  describe("turnMachineOff() method:", function () {
    it("turnMachineOff() mora vratiti status false Boolean tipa ako je stroj prethodno upaljen", function () {
      coffeMachine.powerStatus = true;
      let machineOn = coffeMachine.turnMachineOff();
      assert.equal(machineOn, false);
      assert.equal(coffeMachine.powerStatus, false);
    });

    it("turnMachineOff() mora vratiti status false Boolean tipa ako je stroj prethodno ugasen i ispisati poruku na konzoli", function () {
      let spy = sinon.spy(console, "log");
      coffeMachine.powerStatus = false;
      let machineOn = coffeMachine.turnMachineOff();
      assert.equal(machineOn, false);
      assert.equal(coffeMachine.powerStatus, false);
      assert(spy.calledWith("Machine is already turned off !"));
      spy.restore();
    });
  });

  describe("refill() method:", function () {
    it("refill() mora vratiti status 200 ako su argumenti numerickog tipa i nadopuna uspjesna", function () {
      let spy = sinon.spy(console, "log");
      assert.equal(coffeMachine.refill(20, 20), 200);
      assert(spy.calledWith("Machine refilled !"));
      spy.restore();
    });

    it("refill() mora vratiti gresku s definiranom porukom ako argumenti nisu numerickog tipa", function () {
      assert.throws(
        function () {
          coffeMachine.refill("string value", 20);
        },
        Error,
        /Illegal type/
      );
    });
  });

  describe("makeCoffe() method:", function () {
    it("makeCoffe() moze napraviti kavu dok ima vise od 5g kave i 15 ml vode", function () {
      coffeMachine.waterAmmount = 20;
      coffeMachine.coffeAmount = 20;
      let beforeWater = coffeMachine.waterAmmount;
      let beforeCoffe = coffeMachine.coffeAmount;
      coffeMachine.makeCoffe();
      assert.equal(beforeCoffe - 5, coffeMachine.coffeAmount);
      assert.equal(beforeWater - 15, coffeMachine.waterAmmount);
    });

    it("makeCoffe() mora vratiti poruku da je potrebno nadopuniti vodu i kavu ako ima manje od navedenih kolicina i ne smije omoguciti pravljenje kave", function () {
      let spy = sinon.spy(console, "log");
      coffeMachine.waterAmmount = 4;
      coffeMachine.coffeAmount = 4;
      let beforeWater = coffeMachine.waterAmmount;
      let beforeCoffe = coffeMachine.coffeAmount;
      coffeMachine.makeCoffe();
      assert.equal(beforeWater, coffeMachine.waterAmmount);
      assert.equal(beforeCoffe, coffeMachine.coffeAmount);
      assert(
        spy.calledWith(
          "You don´t have enough amount of ingredients for making coffe. Please refill!"
        )
      );
      spy.restore();
    });
  });
});
