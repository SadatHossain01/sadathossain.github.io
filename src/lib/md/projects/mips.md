# 8-bit MIPS Processor with Pipelining
*A groundbreaking implementation at the Department of Computer Science and Engineering, BUET*

## Project Overview
This project marks the first successful implementation of an 8-bit MIPS processor with pipelining in the history of CSE, BUET. The implementation demonstrates advanced computer architecture concepts and showcases the practical application of theoretical knowledge.

## Contributors
- [Mohammad Sadat Hossain](https://www.facebook.com/sadathossain01)
- [Nafis Tahmid](https://www.facebook.com/tahmid404)
- [Asif Azad](https://www.facebook.com/asif.azad.52438)
- [Md. Ashrafur Rahman Khan](https://www.facebook.com/ashrafur.khan.37)
- [Shattik Islam Rhythm](https://www.facebook.com/shattik.islam.5)

## Team Photo
![Team Photo](https://github.com/BRAINIAC2677/CSE-306-Computer-Architecture/blob/main/assets/group_photo.jpg?raw=true)

## Course Details
- Course: CSE 306 - Computer Architecture

## Quick Links
- [Atmega Codes](https://github.com/SadatHossain01/CSE306-ComputerArchitecture/tree/main/MIPS/Atmega)
- [Circuit Designs](https://github.com/SadatHossain01/CSE306-ComputerArchitecture/tree/main/MIPS/Circuits)
- [Report (TeX & PDF)](https://github.com/SadatHossain01/CSE306-ComputerArchitecture/tree/main/MIPS/Report)

## Technical Implementation
### Architecture Overview
MIPS (Microprocessor without Interlocked Pipeline Stages) employs RISC architecture, known for its efficiency and simplicity. Our implementation features an 8-bit design with complete pipelining support.

### Pipeline Stages
The processor implements a modified four-stage pipeline:
1. Instruction Fetch
2. Instruction Decode
3. Execution
4. Memory Access & Write Back (combined)

### Hardware Specifications
- 8-bit data bus
- 8-bit address bus
- 8-bit ALU
- Separate instruction and data memory
- Pipeline registers between stages

### Performance Features
The pipelining implementation allows multiple instructions to be processed simultaneously, significantly improving throughput and computational efficiency.