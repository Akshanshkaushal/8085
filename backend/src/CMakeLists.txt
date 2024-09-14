set(SOURCES
    assembler.cpp
    debugger.cpp
    instructions.cpp
    io.cpp
    memory.cpp
    registers.cpp
    interrupts.cpp
    Micro8085.cpp
)

add_executable(Micro8085 ${SOURCES})
