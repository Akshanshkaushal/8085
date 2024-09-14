#include "memory.hpp"
#include <stdexcept>

Memory::Memory() : mem(65536, 0) {
    std::cout << "Memory initialized with size: " << mem.size() << std::endl;
}

uint8_t Memory::read(uint16_t address) const {
    if (address >= mem.size()) {
        std::cerr << "Memory read error: Address out of bounds: " << address << std::endl;
        throw std::out_of_range("Memory address out of bounds");
    }
    std::cout << "Reading from memory address: " << address << std::endl;
    return mem[address];
}

void Memory::write(uint16_t address, uint8_t value) {
    if (address >= mem.size()) {
        std::cerr << "Memory write error: Address out of bounds: " << address << std::endl;
        throw std::out_of_range("Memory address out of bounds");
    }
    std::cout << "Writing to memory address: " << address << ", value: " << static_cast<int>(value) << std::endl;
    mem[address] = value;
}