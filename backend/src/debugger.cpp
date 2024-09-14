#include "debugger.hpp"
#include <sstream>
#include <iomanip>

Debugger::Debugger() : pc(0) {}

void Debugger::startDebugging(const std::vector<uint8_t>& mem) {
    memory = mem;
    pc = 0;
}

void Debugger::step() {
    if (pc >= memory.size()) {
        return;
    }

    uint8_t opcode = memory[pc];
    switch (opcode) {
        case 0x3E: // MVI A, data
            if (pc + 1 < memory.size()) {
                registers.a = memory[pc + 1];
                pc += 2;
            }
            break;
        case 0x76: // HLT
            // Do nothing, just increment PC
            pc++;
            break;
        default:
            // Unknown opcode, just increment PC
            pc++;
            break;
    }
}

std::string Debugger::getState() const {
    std::ostringstream oss;
    oss << "PC: 0x" << std::hex << std::setw(4) << std::setfill('0') << pc << "\n";
    oss << "Registers:\n";
    oss << "  A: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.a) << "\n";
    oss << "  B: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.b) << "\n";
    oss << "  C: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.c) << "\n";
    oss << "  D: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.d) << "\n";
    oss << "  E: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.e) << "\n";
    oss << "  H: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.h) << "\n";
    oss << "  L: 0x" << std::hex << std::setw(2) << std::setfill('0') << static_cast<int>(registers.l) << "\n";
    oss << "  SP: 0x" << std::hex << std::setw(4) << std::setfill('0') << registers.sp << "\n";
    oss << "Flags:\n";
    oss << "  Carry: " << (registers.carry ? "1" : "0") << "\n";
    oss << "  Zero: " << (registers.zero ? "1" : "0") << "\n";
    oss << "  Sign: " << (registers.sign ? "1" : "0") << "\n";
    oss << "  Parity: " << (registers.parity ? "1" : "0") << "\n";
    oss << "  Auxiliary Carry: " << (registers.auxiliary_carry ? "1" : "0") << "\n";
    return oss.str();
}