# PP8085

**PP8085** is a Rust-based emulation library for the Intel 8085 Microprocessor architecture. Designed to closely replicate the functionality of the physical 8085 microprocessor, PP8085 covers all documented instructions, though it is not clock-cycle accurate. The full list of supported instructions can be found [here](https://www.javatpoint.com/instruction-set-of-8085).

## Project Components

1. **Rust Emulation Library**  
   Implements the full 8085 instruction set for accurate software-based emulation.

2. **8085 Assembler**  
   Enables assembly-level coding and translation of instructions for emulation.

3. **Web Interface**  
   The Rust API is exposed to WebAssembly using `wasm-pack` and `wasm-bindgen`, enabling a browser-based interface built with React and TypeScript.

> **Note:** Interrupts are not yet implemented, so instructions `RIM` and `SIM` are currently non-functional.
