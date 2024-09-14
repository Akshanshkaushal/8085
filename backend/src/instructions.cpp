#include "instructions.hpp"
#include <iostream>

void Instructions::execute(uint8_t opcode) {
    switch (opcode) {
        case 0x00:
            std::cout << "NOP" << std::endl;
            break;
        // Add other instructions
    }
}
