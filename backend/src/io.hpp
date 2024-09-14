#ifndef IO_HPP
#define IO_HPP

#include <cstdint>

class IO {
public:
    void read(uint8_t port);
    void write(uint8_t port, uint8_t value);
};

#endif // IO_HPP
