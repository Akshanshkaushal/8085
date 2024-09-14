#pragma once
#include <cstdint>
#include <string>
#include <vector>
#include "registers.hpp"

class Debugger {
public:
    Debugger();
    void startDebugging(const std::vector<uint8_t>& memory);
    void step();
    std::string getState() const;

private:
    std::vector<uint8_t> memory;
    uint16_t pc;
    Registers registers;
};