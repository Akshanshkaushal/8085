#pragma once
#include <cstdint>

class Registers {
public:
    Registers();
    
    uint8_t a;  // Accumulator
    uint8_t b;
    uint8_t c;
    uint8_t d;
    uint8_t e;
    uint8_t h;
    uint8_t l;
    
    uint16_t sp;  // Stack Pointer
    uint16_t pc;  // Program Counter
    
    // Flags
    bool carry;
    bool zero;
    bool sign;
    bool parity;
    bool auxiliary_carry;
};