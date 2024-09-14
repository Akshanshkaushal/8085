#include "io.hpp"
#include <iostream>
#include <cstdint>

void IO::read(uint8_t port) {
    // Simulate reading from an I/O port
    std::cout << "Reading from port " << static_cast<int>(port) << std::endl;
}

void IO::write(uint8_t port, uint8_t value) {
    // Simulate writing to an I/O port
    std::cout << "Writing to port " << static_cast<int>(port) << " value " << static_cast<int>(value) << std::endl;
}
