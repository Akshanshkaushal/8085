#pragma once
#include <cstdint>
#include <vector>
#include <iostream>

class Memory {
public:
    Memory();
    uint8_t read(uint16_t address) const;
    void write(uint16_t address, uint8_t value);

private:
    std::vector<uint8_t> mem;
};