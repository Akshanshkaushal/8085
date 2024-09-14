#include "assembler.hpp"
#include "debugger.hpp"
#include "instructions.hpp"
#include "io.hpp"
#include "memory.hpp"
#include "registers.hpp"
#include "interrupts.hpp"
#include <iostream>
#include <vector>
#include <stdexcept>

int main() {
    std::cout << "Starting Micro8085 simulator..." << std::endl;

    try {
        std::cout << "Initializing components..." << std::endl;
        Assembler assembler;
        Debugger debugger;
        Instructions instructions;
        IO io;
        Memory memory;
        Registers registers;
        Interrupts interrupts;

        std::cout << "Components initialized." << std::endl;

        // Example assembly code
        std::string code = "MVI A, 42\nHLT";
        std::cout << "Assembly code: " << code << std::endl;

        // Assemble the code
        std::cout << "Assembling code..." << std::endl;
        std::vector<uint8_t> machineCode = assembler.assemble(code);
        std::cout << "Code assembled. Machine code size: " << machineCode.size() << " bytes" << std::endl;

        // Print machine code
        std::cout << "Machine code: ";
        for (uint8_t byte : machineCode) {
            std::cout << std::hex << static_cast<int>(byte) << " ";
        }
        std::cout << std::endl;

        // Load the machine code into memory
        std::cout << "Loading machine code into memory..." << std::endl;
        for (size_t i = 0; i < machineCode.size(); ++i) {
            memory.write(i, machineCode[i]);
        }
        std::cout << "Machine code loaded into memory." << std::endl;

        // Start debugging with a limited memory content
        std::cout << "Preparing memory content for debugger..." << std::endl;
        std::vector<uint8_t> memoryContent;
        const uint16_t memorySize = 256; // Limit to 256 bytes for now
        for (uint16_t i = 0; i < memorySize; ++i) {
            try {
                uint8_t value = memory.read(i);
                memoryContent.push_back(value);
                if (i % 16 == 0) {
                    std::cout << "Read " << i << " bytes from memory." << std::endl;
                }
            } catch (const std::exception& e) {
                std::cerr << "Error reading memory at address " << i << ": " << e.what() << std::endl;
                break;
            }
        }
        std::cout << "Memory content prepared. Total bytes read: " << memoryContent.size() << std::endl;

        std::cout << "Starting debugger..." << std::endl;
        debugger.startDebugging(memoryContent);

        // Step through both instructions
        std::cout << "Stepping through the program..." << std::endl;
        for (int i = 0; i < 2; i++) {
            std::cout << "Step " << i + 1 << ":" << std::endl;
            debugger.step();
            std::cout << "Debugger state:" << std::endl;
            std::cout << debugger.getState() << std::endl;
        }

        std::cout << "Simulation complete." << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "An error occurred: " << e.what() << std::endl;
        return 1;
    } catch (...) {
        std::cerr << "An unknown error occurred." << std::endl;
        return 1;
    }

    return 0;
}