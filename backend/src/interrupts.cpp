#include "interrupts.hpp"
#include <iostream>

void Interrupts::handleInterrupt(int interruptType) {
    // Handle different types of interrupts
    std::cout << "Handling interrupt: " << interruptType << std::endl;
}
