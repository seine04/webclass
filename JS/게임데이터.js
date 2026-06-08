const gameDatabase = {
    "game1": {
        title: "게임1",
        tags: "로그라이크, 액션",
        price: "₩ 51,000",
        img: "../img/로그라이크_액션.png",
        desc: "짜릿한 액션과 무작위로 생성되는 던전 속에서 살아남으세요.",
        release: "2026-02-15",
        developer: "Alpaca Games",
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                cpu: "Intel Core i3-6100 / AMD FX-4350",
                memory: "4 GB RAM",
                graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7850",
                storage: "4 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i5-4460 / AMD Ryzen 3 1200",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 960 / AMD Radeon RX 470",
                storage: "4 GB 사용 가능 공간"
            }
        }
    },
    "game2": {
        title: "게임2",
        tags: "로그라이크, 전략",
        price: "₩ 43,000",
        img: "../img/로그라이크_전략.png",
        desc: "최고의 전략으로 유닛을 배치하고 적의 공세를 막아내세요.",
        release: "2025-11-20",
        developer: "Pixel Studio",
        requirements: {
            minimum: {
                os: "Windows 7/8.1/10 64-bit",
                cpu: "Intel Dual Core 2.0 GHz",
                memory: "2 GB RAM",
                graphics: "VRAM 512MB 이상 그래픽 카드",
                storage: "1 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i3 / AMD Phenom II",
                memory: "4 GB RAM",
                graphics: "NVIDIA GeForce GTX 460 / AMD Radeon HD 6870",
                storage: "1 GB 사용 가능 공간"
            }
        }
    },
    "game3": {
        title: "게임3",
        tags: "전략, RPG",
        price: "₩ 32,000",
        img: "../img/전략_RPG.png",
        desc: "방대한 오픈월드에서 펼쳐지는 전략적인 모험과 성장.",
        release: "2026-01-10",
        developer: "Indie Team A",
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                cpu: "Intel Core i5-2500K / AMD FX-6300",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 760 / AMD Radeon R9 280",
                storage: "15 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
                memory: "16 GB RAM",
                graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
                storage: "15 GB SSD 사용 가능 공간"
            }
        }
    },
    "game4": {
        title: "게임4",
        tags: "액션, RPG",
        price: "₩ 21,000",
        img: "../img/액션_RPG.png",
        desc: "빠른 템포의 핵앤슬래시 액션을 즐겨보세요.",
        release: "2024-05-12",
        developer: "Soft Design",
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                cpu: "Intel Core i3 / AMD FX-4300",
                memory: "4 GB RAM",
                graphics: "NVIDIA GeForce GTX 460 / AMD Radeon HD 6850",
                storage: "5 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i5 / AMD Ryzen 5",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 390",
                storage: "5 GB 사용 가능 공간"
            }
        }
    },
    "game5": {
        title: "게임5",
        tags: "액션, 시뮬레이션",
        price: "₩ 15,000",
        img: "../img/액션_시뮬레이션.png",
        desc: "현실감 넘치는 물리 엔진이 적용된 액션 시뮬레이터.",
        release: "2025-08-30",
        developer: "Sim World",
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                cpu: "Intel Core i5-3570K / AMD FX-8310",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 780 / AMD Radeon RX 470",
                storage: "10 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i7-4790 / AMD Ryzen 3 3200G",
                memory: "16 GB RAM",
                graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 590",
                storage: "10 GB SSD 사용 가능 공간"
            }
        }
    },
    "game6": {
        title: "게임6",
        tags: "어드벤처, 시뮬레이션",
        price: "₩ 65,000",
        img: "../img/어드벤처_시뮬레이션.png",
        desc: "미지의 섬을 탐험하고 자신만의 기지를 건설하세요.",
        release: "2026-04-01",
        developer: "Islander",
        requirements: {
            minimum: {
                os: "Windows 10 64-bit",
                cpu: "Intel Core i5-4460 / AMD FX-6300",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 960 / AMD Radeon R9 280",
                storage: "20 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i7-6700K / AMD Ryzen 5 2600X",
                memory: "16 GB RAM",
                graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5600 XT",
                storage: "20 GB SSD 사용 가능 공간"
            }
        }
    },
    "game7": {
        title: "게임7",
        tags: "시뮬레이션, RPG",
        price: "₩ 39,000",
        img: "../img/시뮬레이션_RPG.png",
        desc: "나만의 마을을 경영하며 용사들을 육성하는 게임.",
        release: "2025-12-25",
        developer: "Town Maker",
        requirements: {
            minimum: {
                os: "Windows 7/8/10 64-bit",
                cpu: "Dual Core 2.4 GHz",
                memory: "4 GB RAM",
                graphics: "DirectX 9.0c 호환 그래픽 카드",
                storage: "2 GB 사용 가능 공간"
            },
            recommended: {
                os: "Windows 10/11 64-bit",
                cpu: "Intel Core i3-3220 / AMD FX-4130",
                memory: "8 GB RAM",
                graphics: "NVIDIA GeForce GTX 650 / AMD Radeon HD 7750",
                storage: "2 GB 사용 가능 공간"
            }
        }
    }
};