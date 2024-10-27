![plot](./8085.png)

# PP8085

**PP808** is a program that emulates the Intel 8085 Microprocessor architecure. The library is written in Rust and aims to mirror the operation of the
physical device.

The emulation is not clock cycle accurate. All of the instructions described in the specification have been implemented. A list of all the instruction can be found [here](https://www.javatpoint.com/instruction-set-of-8085)

This project has three major components:
* Rust Emulation Library of 8085
* 8085 assmebler 

*Interrupts do not work as of yet(RIM and SIM do nothing).*

Parts of the Rust API have been exposed to WebAssembly using `wasm-pack` and `wasm-bindgen`. The web-app is built with React on TypeScript.