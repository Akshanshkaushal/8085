#include "assembler.hpp"
#include <sstream>
#include <algorithm>
#include <iostream>

Assembler::Assembler() {
    initOpcodeMap();
}

void Assembler::initOpcodeMap() {
    opcodeMap = {
        {"NOP", 0x00},
        {"MVI A,", 0x3E},
        {"HLT", 0x76}
        // Add other opcodes here
    };
}

std::vector<uint8_t> Assembler::assemble(const std::string& code) {
    std::vector<uint8_t> machineCode;
    std::istringstream iss(code);
    std::string line;

    while (std::getline(iss, line)) {
        std::istringstream lineStream(line);
        std::string instruction;
        lineStream >> instruction;

        if (instruction == "MVI") {
            std::string reg;
            int value;
            lineStream >> reg >> value;
            if (reg == "A,") {
                machineCode.push_back(0x3E);  // MVI A opcode
                machineCode.push_back(static_cast<uint8_t>(value));
            }
        } else if (opcodeMap.find(instruction) != opcodeMap.end()) {
            machineCode.push_back(opcodeMap[instruction]);
        }
    }

    std::cout << "Assembled machine code: ";
    for (uint8_t byte : machineCode) {
        std::cout << std::hex << static_cast<int>(byte) << " ";
    }
    std::cout << std::endl;

    return machineCode;
}