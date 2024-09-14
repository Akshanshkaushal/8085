#include "registers.hpp"

Registers::Registers()
    : a(0), b(0), c(0), d(0), e(0), h(0), l(0),
      sp(0), pc(0),
      carry(false), zero(false), sign(false), parity(false), auxiliary_carry(false) {}