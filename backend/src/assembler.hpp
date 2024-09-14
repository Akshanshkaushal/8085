#ifndef ASSEMBLER_HPP
#define ASSEMBLER_HPP
#include <cstdint>
#include <string>
#include <vector>
#include <map>

class Assembler {
public:
    Assembler();
    std::vector<uint8_t> assemble(const std::string& code);

private:
    std::map<std::string, uint8_t> opcodeMap;
    void initOpcodeMap();
};

#endif // ASSEMBLER_HPP