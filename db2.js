export const db = {
    cursos: [
        {
            id: 1,
            nome: 'Administração - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    publica: { vagas: 12, candidatos: 189, candidatosPorVaga: 15.75 },
                    universal: { vagas: 15, candidatos: 219, candidatosPorVaga: 14.6 }
                },
                2017: {
                    negro: { vagas: 3, candidatos: 8, candidatosPorVaga: 2.667 },
                    publica: { vagas: 12, candidatos: 170, candidatosPorVaga: 14.16 },
                    universal: { vagas: 15, candidatos: 173, candidatosPorVaga: 11.53 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 12, candidatos: 131, candidatosPorVaga: 10.92 },
                    universal: { vagas: 15, candidatos: 188, candidatosPorVaga: 12.53 }
                },
                2019: {
                    negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 12, candidatos: 155, candidatosPorVaga: 12.92 },
                    universal: { vagas: 15, candidatos: 176, candidatosPorVaga: 11.73 }
                },
                2020: {
                    negro: { vagas: 6, candidatos: 7, candidatosPorVaga: 1.17 },
                    publica: { vagas: 24, candidatos: 121, candidatosPorVaga: 5.04 },
                    universal: { vagas: 30, candidatos: 139, candidatosPorVaga: 4.63 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 8, candidatosPorVaga: 2.67 },
                    publica: { vagas: 12, candidatos: 125, candidatosPorVaga: 10.42 },
                    universal: { vagas: 15, candidatos: 194, candidatosPorVaga: 12.93 }
                },
                2022: {
                    negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 6, candidatos: 8, candidatosPorVaga: 1.33 },
                    publica: { vagas: 24, candidatos: 152, candidatosPorVaga: 6.33 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 24, candidatos: 130, candidatosPorVaga: 5.42 }
                },
                2023: {
                    negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 6, candidatos: 7, candidatosPorVaga: 1.17 },
                    publica: { vagas: 24, candidatos: 130, candidatosPorVaga: 5.42 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 24, candidatos: 86, candidatosPorVaga: 3.58 }
                },
                2024: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 6, candidatos: 12, candidatosPorVaga: 2.00 },
                    publica: { vagas: 8, candidatos: 96, candidatosPorVaga: 12.00 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 24, candidatos: 101, candidatosPorVaga: 4.21 }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica_negro: { vagas: 6, candidatos: 14, candidatosPorVaga: 2.33 },
                    publica: { vagas: 8, candidatos: 99, candidatosPorVaga: 12.38 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 24, candidatos: 91, candidatosPorVaga: 3.79 }
                }
            }
        },
        {
            id: 2,
            nome: 'Administração (Comércio Exterior) - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 46, candidatosPorVaga: 6.57 },
                    universal: { vagas: 7, candidatos: 77, candidatosPorVaga: 11 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 46, candidatosPorVaga: 6.57 },
                    universal: { vagas: 7, candidatos: 77, candidatosPorVaga: 11 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 5, candidatosPorVaga: 5.00 },
                    publica: { vagas: 6, candidatos: 26, candidatosPorVaga: 4.33 },
                    universal: { vagas: 8, candidatos: 53, candidatosPorVaga: 6.63 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 6, candidatos: 40, candidatosPorVaga: 6.67 },
                    universal: { vagas: 8, candidatos: 58, candidatosPorVaga: 7.25 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 12, candidatos: 25, candidatosPorVaga: 2.08 },
                    universal: { vagas: 15, candidatos: 59, candidatosPorVaga: 3.93 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 24, candidatosPorVaga: 4.00 },
                    universal: { vagas: 7, candidatos: 64, candidatosPorVaga: 9.14 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 32, candidatosPorVaga: 2.67 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 56, candidatosPorVaga: 5.09 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 12, candidatos: 37, candidatosPorVaga: 3.08 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 42, candidatosPorVaga: 3.82 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 4, candidatos: 1, candidatosPorVaga: 0.25 },
                    publica: { vagas: 5, candidatos: 30, candidatosPorVaga: 6.00 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 45, candidatosPorVaga: 3.21 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 4, candidatos: 1, candidatosPorVaga: 0.25 },
                    publica: { vagas: 5, candidatos: 34, candidatosPorVaga: 6.80 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 41, candidatosPorVaga: 2.93 }
                }
            }
        },
        {
            id: 3,
            nome: 'Agronomia - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.5 },
                    publica: { vagas: 9, candidatos: 207, candidatosPorVaga: 23 },
                    universal: { vagas: 11, candidatos: 223, candidatosPorVaga: 20.27 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.5 },
                    publica: { vagas: 9, candidatos: 162, candidatosPorVaga: 18 },
                    universal: { vagas: 11, candidatos: 202, candidatosPorVaga: 18.36 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 9, candidatos: 125, candidatosPorVaga: 13.89 },
                    universal: { vagas: 10, candidatos: 176, candidatosPorVaga: 17.60 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica: { vagas: 9, candidatos: 94, candidatosPorVaga: 10.44 },
                    universal: { vagas: 11, candidatos: 174, candidatosPorVaga: 15.82 }
                },
                2020: {
                    negro: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    publica: { vagas: 18, candidatos: 87, candidatosPorVaga: 4.83 },
                    universal: { vagas: 22, candidatos: 210, candidatosPorVaga: 9.55 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 9, candidatos: 97, candidatosPorVaga: 10.78 },
                    universal: { vagas: 11, candidatos: 206, candidatosPorVaga: 18.73 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 5, candidatos: 11, candidatosPorVaga: 2.20 },
                    publica: { vagas: 18, candidatos: 135, candidatosPorVaga: 7.50 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 18, candidatos: 174, candidatosPorVaga: 9.67 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    publica: { vagas: 18, candidatos: 100, candidatosPorVaga: 5.56 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 18, candidatos: 153, candidatosPorVaga: 8.50 }
                },
                2024: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica_negro: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    publica: { vagas: 7, candidatos: 109, candidatosPorVaga: 15.57 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 20, candidatos: 129, candidatosPorVaga: 6.45 }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 12, candidatosPorVaga: 4.00 },
                    publica_negro: { vagas: 5, candidatos: 6, candidatosPorVaga: 1.20 },
                    publica: { vagas: 7, candidatos: 90, candidatosPorVaga: 12.86 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 20, candidatos: 132, candidatosPorVaga: 6.60 }
                }
            }
        },
        {
            id: 4,
            nome: 'Artes Visuais - licenciatura - Vespertino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 8, candidatos: 41, candidatosPorVaga: 5.12 },
                    universal: { vagas: 9, candidatos: 49, candidatosPorVaga: 5.44 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.5 },
                    publica: { vagas: 7, candidatos: 23, candidatosPorVaga: 3.28 },
                    universal: { vagas: 9, candidatos: 43, candidatosPorVaga: 4.77 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 8, candidatos: 30, candidatosPorVaga: 3.75 },
                    universal: { vagas: 9, candidatos: 41, candidatosPorVaga: 4.56 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica: { vagas: 7, candidatos: 27, candidatosPorVaga: 3.86 },
                    universal: { vagas: 9, candidatos: 36, candidatosPorVaga: 4.00 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 15, candidatosPorVaga: 2.14 },
                    universal: { vagas: 9, candidatos: 32, candidatosPorVaga: 3.56 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica: { vagas: 7, candidatos: 22, candidatosPorVaga: 3.14 },
                    pcd: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    universal: { vagas: 7, candidatos: 25, candidatosPorVaga: 3.57 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica: { vagas: 7, candidatos: 80, candidatosPorVaga: 11.43 },
                    pcd: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    universal: { vagas: 7, candidatos: 59, candidatosPorVaga: 8.43 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 4, candidatosPorVaga: 4.00 },
                    publica_negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 3, candidatos: 63, candidatosPorVaga: 21.00 },
                    pcd: { vagas: 1, candidatos: 6, candidatosPorVaga: 6.00 },
                    universal: { vagas: 9, candidatos: 56, candidatosPorVaga: 6.22 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica: { vagas: 3, candidatos: 52, candidatosPorVaga: 17.33 },
                    pcd: { vagas: 1, candidatos: 10, candidatosPorVaga: 10.00 },
                    universal: { vagas: 9, candidatos: 32, candidatosPorVaga: 3.56 }
                }
            }
        },
        {
            id: 5,
            nome: 'Ciências Biológicas - bacharelado - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 40, candidatosPorVaga: 8 },
                    universal: { vagas: 4, candidatos: 68, candidatosPorVaga: 17 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 26, candidatosPorVaga: 5.2 },
                    universal: { vagas: 4, candidatos: 49, candidatosPorVaga: 12.25 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 4, candidatos: 32, candidatosPorVaga: 8.00 },
                    universal: { vagas: 4, candidatos: 46, candidatosPorVaga: 11.50 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 4, candidatos: 31, candidatosPorVaga: 7.75 },
                    universal: { vagas: 4, candidatos: 53, candidatosPorVaga: 13.25 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 30, candidatosPorVaga: 3.75 },
                    universal: { vagas: 9, candidatos: 49, candidatosPorVaga: 5.44 }
                },
                2021: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 4, candidatos: 17, candidatosPorVaga: 4.25 },
                    universal: { vagas: 5, candidatos: 56, candidatosPorVaga: 11.20 }
                },
                2022: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 8, candidatos: 29, candidatosPorVaga: 3.63 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 7, candidatos: 53, candidatosPorVaga: 7.57 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 8, candidatos: 34, candidatosPorVaga: 4.25 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 7, candidatos: 45, candidatosPorVaga: 6.43 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 31, candidatosPorVaga: 7.75 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 11, candidatos: 37, candidatosPorVaga: 3.36 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 37, candidatosPorVaga: 9.25 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 11, candidatos: 47, candidatosPorVaga: 4.27 }
                }
            }
        },
        {
            id: 6,
            nome: 'Ciências Biológicas - licenciatura - Vespertino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 4, candidatos: 21, candidatosPorVaga: 5.25 },
                    universal: { vagas: 4, candidatos: 23, candidatosPorVaga: 5.75 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 15, candidatosPorVaga: 3 },
                    universal: { vagas: 4, candidatos: 27, candidatosPorVaga: 6.75 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 10, candidatosPorVaga: 2.50 },
                    universal: { vagas: 4, candidatos: 28, candidatosPorVaga: 7.00 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 13, candidatosPorVaga: 2.60 },
                    universal: { vagas: 4, candidatos: 31, candidatosPorVaga: 7.75 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 12, candidatosPorVaga: 1.50 },
                    universal: { vagas: 9, candidatos: 25, candidatosPorVaga: 2.78 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 3, candidatosPorVaga: 0.60 },
                    universal: { vagas: 5, candidatos: 11, candidatosPorVaga: 2.20 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 3, candidatosPorVaga: 0.38 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 7, candidatos: 11, candidatosPorVaga: 1.57 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 8, candidatos: 52, candidatosPorVaga: 6.50 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 7, candidatos: 44, candidatosPorVaga: 6.29 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 3, candidatos: 24, candidatosPorVaga: 8.00 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 7, candidatos: 55, candidatosPorVaga: 7.86 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 3, candidatos: 34, candidatosPorVaga: 11.33 },
                    pcd: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    universal: { vagas: 7, candidatos: 31, candidatosPorVaga: 4.43 }
                }
            }
        },
        {
            id: 7,
            nome: 'Ciências Biológicas - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 5, candidatosPorVaga: 5 },
                    publica: { vagas: 4, candidatos: 51, candidatosPorVaga: 12.75 },
                    universal: { vagas: 4, candidatos: 51, candidatosPorVaga: 12.75 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 4, candidatos: 41, candidatosPorVaga: 10.25 },
                    universal: { vagas: 4, candidatos: 34, candidatosPorVaga: 8.5 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 4, candidatos: 36, candidatosPorVaga: 9.00 },
                    universal: { vagas: 4, candidatos: 28, candidatosPorVaga: 7.00 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 4, candidatos: 33, candidatosPorVaga: 8.25 },
                    universal: { vagas: 4, candidatos: 42, candidatosPorVaga: 10.50 }
                },
                2020: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 8, candidatos: 26, candidatosPorVaga: 3.25 },
                    universal: { vagas: 9, candidatos: 29, candidatosPorVaga: 3.22 }
                },
                2021: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 4, candidatos: 19, candidatosPorVaga: 4.75 },
                    universal: { vagas: 5, candidatos: 21, candidatosPorVaga: 4.20 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 33, candidatosPorVaga: 4.13 },
                    pcd: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    universal: { vagas: 7, candidatos: 9, candidatosPorVaga: 1.29 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 7, candidatosPorVaga: 7.00 },
                    publica_negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.50 },
                    publica: { vagas: 8, candidatos: 124, candidatosPorVaga: 15.50 },
                    pcd: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    universal: { vagas: 7, candidatos: 79, candidatosPorVaga: 11.29 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica: { vagas: 3, candidatos: 79, candidatosPorVaga: 26.33 },
                    pcd: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    universal: { vagas: 7, candidatos: 63, candidatosPorVaga: 9.00 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica: { vagas: 3, candidatos: 45, candidatosPorVaga: 15.00 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 7, candidatos: 38, candidatosPorVaga: 5.43 }
                }
            }
        },
        {
            id: 8,
            nome: 'Ciências Contábeis - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 6, candidatos: 34, candidatosPorVaga: 5.66 },
                    universal: { vagas: 7, candidatos: 46, candidatosPorVaga: 6.57 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 23, candidatosPorVaga: 3.83 },
                    universal: { vagas: 7, candidatos: 31, candidatosPorVaga: 4.42 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 27, candidatosPorVaga: 3.86 },
                    universal: { vagas: 8, candidatos: 46, candidatosPorVaga: 5.75 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 6, candidatosPorVaga: 6.00 },
                    publica: { vagas: 6, candidatos: 32, candidatosPorVaga: 5.33 },
                    universal: { vagas: 8, candidatos: 35, candidatosPorVaga: 4.38 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 21, candidatosPorVaga: 1.75 },
                    universal: { vagas: 15, candidatos: 34, candidatosPorVaga: 2.27 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 16, candidatosPorVaga: 2.67 },
                    universal: { vagas: 7, candidatos: 26, candidatosPorVaga: 3.71 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 12, candidatos: 22, candidatosPorVaga: 1.83 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 20, candidatosPorVaga: 1.82 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 12, candidatos: 14, candidatosPorVaga: 1.17 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 12, candidatosPorVaga: 1.09 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 16, candidatosPorVaga: 4.00 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 21, candidatosPorVaga: 1.91 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 21, candidatosPorVaga: 5.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 15, candidatosPorVaga: 1.36 }
                }
            }
        },
        {
            id: 9,
            nome: 'Ciências Contábeis - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 3, candidatos: 9, candidatosPorVaga: 3 },
                    publica: { vagas: 12, candidatos: 143, candidatosPorVaga: 11.91 },
                    universal: { vagas: 15, candidatos: 115, candidatosPorVaga: 7.66 }
                },
                2017: {
                    negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2 },
                    publica: { vagas: 12, candidatos: 113, candidatosPorVaga: 9.41 },
                    universal: { vagas: 15, candidatos: 114, candidatosPorVaga: 7.6 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 12, candidatos: 83, candidatosPorVaga: 6.92 },
                    universal: { vagas: 15, candidatos: 106, candidatosPorVaga: 7.07 }
                },
                2019: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 12, candidatos: 104, candidatosPorVaga: 8.67 },
                    universal: { vagas: 15, candidatos: 102, candidatosPorVaga: 6.80 }
                },
                2020: {
                    negro: { vagas: 6, candidatos: 11, candidatosPorVaga: 1.83 },
                    publica: { vagas: 24, candidatos: 54, candidatosPorVaga: 2.25 },
                    universal: { vagas: 30, candidatos: 59, candidatosPorVaga: 1.97 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 70, candidatosPorVaga: 5.83 },
                    universal: { vagas: 15, candidatos: 86, candidatosPorVaga: 5.73 }
                },
                2022: {
                    negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica_negro: { vagas: 6, candidatos: 5, candidatosPorVaga: 0.83 },
                    publica: { vagas: 24, candidatos: 71, candidatosPorVaga: 2.96 },
                    pcd: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    universal: { vagas: 24, candidatos: 60, candidatosPorVaga: 2.50 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 6, candidatos: 5, candidatosPorVaga: 0.83 },
                    publica: { vagas: 24, candidatos: 72, candidatosPorVaga: 3.00 },
                    pcd: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    universal: { vagas: 24, candidatos: 49, candidatosPorVaga: 2.04 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 6, candidatos: 8, candidatosPorVaga: 1.33 },
                    publica: { vagas: 8, candidatos: 63, candidatosPorVaga: 7.88 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 24, candidatos: 43, candidatosPorVaga: 1.79 }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 6, candidatos: 8, candidatosPorVaga: 1.33 },
                    publica: { vagas: 8, candidatos: 63, candidatosPorVaga: 7.88 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 24, candidatos: 38, candidatosPorVaga: 1.58 }
                }
            }
        },
        {
            id: 10,
            nome: 'Ciências Econômicas - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 21, candidatosPorVaga: 3.5 },
                    universal: { vagas: 7, candidatos: 28, candidatosPorVaga: 4 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 7, candidatos: 19, candidatosPorVaga: 2.71 },
                    universal: { vagas: 7, candidatos: 27, candidatosPorVaga: 3.85 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 15, candidatosPorVaga: 2.14 },
                    universal: { vagas: 8, candidatos: 24, candidatosPorVaga: 3.00 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 6, candidatos: 11, candidatosPorVaga: 1.83 },
                    universal: { vagas: 8, candidatos: 20, candidatosPorVaga: 2.50 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 4, candidatosPorVaga: 0.33 },
                    universal: { vagas: 15, candidatos: 22, candidatosPorVaga: 1.47 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 5, candidatosPorVaga: 0.63 },
                    universal: { vagas: 7, candidatos: 25, candidatosPorVaga: 3.57 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 10, candidatosPorVaga: 0.83 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 19, candidatosPorVaga: 1.73 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 6, candidatosPorVaga: 0.50 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 11, candidatosPorVaga: 1.00 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 9, candidatosPorVaga: 2.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 17, candidatosPorVaga: 1.55 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 4, candidatos: 5, candidatosPorVaga: 1.25 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 22, candidatosPorVaga: 2.00 }
                }
            }
        },
        {
            id: 11,
            nome: 'Ciências Econômicas - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 26, candidatosPorVaga: 4.33 },
                    universal: { vagas: 7, candidatos: 49, candidatosPorVaga: 7 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 28, candidatosPorVaga: 4.67 },
                    universal: { vagas: 7, candidatos: 45, candidatosPorVaga: 6.43 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 6, candidatos: 24, candidatosPorVaga: 4.00 },
                    universal: { vagas: 8, candidatos: 50, candidatosPorVaga: 6.25 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 6, candidatos: 24, candidatosPorVaga: 4.00 },
                    universal: { vagas: 8, candidatos: 49, candidatosPorVaga: 6.13 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 16, candidatosPorVaga: 1.33 },
                    universal: { vagas: 15, candidatos: 32, candidatosPorVaga: 2.13 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 18, candidatosPorVaga: 3.00 },
                    universal: { vagas: 7, candidatos: 27, candidatosPorVaga: 3.86 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 23, candidatosPorVaga: 1.92 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 37, candidatosPorVaga: 3.36 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 12, candidatos: 21, candidatosPorVaga: 1.75 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 24, candidatosPorVaga: 2.18 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 21, candidatosPorVaga: 5.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 13, candidatosPorVaga: 1.18 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 28, candidatosPorVaga: 7.00 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 27, candidatosPorVaga: 2.45 }
                }
            }
        },
        {
            id: 12,
            nome: 'Direito - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 3, candidatos: 14, candidatosPorVaga: 4.67 },
                    publica: { vagas: 12, candidatos: 194, candidatosPorVaga: 16.16 },
                    universal: { vagas: 15, candidatos: 389, candidatosPorVaga: 25.93 }
                },
                2017: {
                    negro: { vagas: 3, candidatos: 11, candidatosPorVaga: 3.67 },
                    publica: { vagas: 12, candidatos: 133, candidatosPorVaga: 11.08 },
                    universal: { vagas: 15, candidatos: 330, candidatosPorVaga: 22 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 8, candidatosPorVaga: 2.67 },
                    publica: { vagas: 12, candidatos: 104, candidatosPorVaga: 8.67 },
                    universal: { vagas: 15, candidatos: 267, candidatosPorVaga: 17.80 }
                },
                2019: {
                    negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    publica: { vagas: 12, candidatos: 116, candidatosPorVaga: 9.67 },
                    universal: { vagas: 15, candidatos: 245, candidatosPorVaga: 16.33 }
                },
                2020: {
                    negro: { vagas: 6, candidatos: 9, candidatosPorVaga: 1.50 },
                    publica: { vagas: 24, candidatos: 109, candidatosPorVaga: 4.54 },
                    universal: { vagas: 30, candidatos: 349, candidatosPorVaga: 11.63 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    publica: { vagas: 12, candidatos: 110, candidatosPorVaga: 9.17 },
                    universal: { vagas: 15, candidatos: 367, candidatosPorVaga: 24.47 }
                },
                2022: {
                    negro: { vagas: 3, candidatos: 8, candidatosPorVaga: 2.67 },
                    publica_negro: { vagas: 6, candidatos: 6, candidatosPorVaga: 1.00 },
                    publica: { vagas: 24, candidatos: 104, candidatosPorVaga: 4.33 },
                    pcd: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    universal: { vagas: 24, candidatos: 249, candidatosPorVaga: 10.38 }
                },
                2023: {
                    negro: { vagas: 3, candidatos: 11, candidatosPorVaga: 3.67 },
                    publica_negro: { vagas: 6, candidatos: 11, candidatosPorVaga: 1.83 },
                    publica: { vagas: 24, candidatos: 104, candidatosPorVaga: 4.33 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 24, candidatos: 252, candidatosPorVaga: 10.50 }
                },
                2024: {
                    negro: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    publica_negro: { vagas: 6, candidatos: 8, candidatosPorVaga: 1.33 },
                    publica: { vagas: 8, candidatos: 91, candidatosPorVaga: 11.38 },
                    pcd: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    universal: { vagas: 24, candidatos: 191, candidatosPorVaga: 7.96 }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 12, candidatosPorVaga: 4.00 },
                    publica_negro: { vagas: 6, candidatos: 16, candidatosPorVaga: 2.67 },
                    publica: { vagas: 8, candidatos: 97, candidatosPorVaga: 12.13 },
                    pcd: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    universal: { vagas: 24, candidatos: 220, candidatosPorVaga: 9.17 }
                }
            }
        },
        {
            id: 13,
            nome: 'Direito - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 3, candidatos: 19, candidatosPorVaga: 6.33 },
                    publica: { vagas: 10, candidatos: 228, candidatosPorVaga: 22.8 },
                    universal: { vagas: 13, candidatos: 434, candidatosPorVaga: 33.38 }
                },
                2017: {
                    negro: { vagas: 3, candidatos: 19, candidatosPorVaga: 6.33 },
                    publica: { vagas: 10, candidatos: 208, candidatosPorVaga: 20.8 },
                    universal: { vagas: 13, candidatos: 388, candidatosPorVaga: 29.85 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 15, candidatosPorVaga: 5.00 },
                    publica: { vagas: 10, candidatos: 210, candidatosPorVaga: 21.00 },
                    universal: { vagas: 13, candidatos: 299, candidatosPorVaga: 23.00 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 9, candidatosPorVaga: 4.50 },
                    publica: { vagas: 11, candidatos: 173, candidatosPorVaga: 15.73 },
                    universal: { vagas: 13, candidatos: 284, candidatosPorVaga: 21.85 }
                },
                2020: {
                    negro: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    publica: { vagas: 21, candidatos: 189, candidatosPorVaga: 9.00 },
                    universal: { vagas: 26, candidatos: 273, candidatosPorVaga: 10.50 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 12, candidatosPorVaga: 4.00 },
                    publica: { vagas: 10, candidatos: 133, candidatosPorVaga: 13.30 },
                    universal: { vagas: 13, candidatos: 323, candidatosPorVaga: 24.85 }
                },
                2022: {
                    negro: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 5, candidatos: 13, candidatosPorVaga: 2.60 },
                    publica: { vagas: 21, candidatos: 143, candidatosPorVaga: 6.81 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 20, candidatos: 254, candidatosPorVaga: 12.70 }
                },
                2023: {
                    negro: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    publica_negro: { vagas: 5, candidatos: 19, candidatosPorVaga: 3.80 },
                    publica: { vagas: 21, candidatos: 169, candidatosPorVaga: 8.05 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 20, candidatos: 149, candidatosPorVaga: 7.45 }
                },
                2024: {
                    negro: { vagas: 3, candidatos: 8, candidatosPorVaga: 2.67 },
                    publica_negro: { vagas: 5, candidatos: 18, candidatosPorVaga: 3.60 },
                    publica: { vagas: 7, candidatos: 123, candidatosPorVaga: 17.57 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 20, candidatos: 210, candidatosPorVaga: 10.50 }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 13, candidatosPorVaga: 4.33 },
                    publica_negro: { vagas: 5, candidatos: 18, candidatosPorVaga: 3.60 },
                    publica: { vagas: 7, candidatos: 149, candidatosPorVaga: 21.29 },
                    pcd: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    universal: { vagas: 20, candidatos: 225, candidatosPorVaga: 11.25 }
                }
            }
        },
        {
            id: 14,
            nome: 'Educação Física - bacharelado - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2 },
                    publica: { vagas: 7, candidatos: 96, candidatosPorVaga: 13.71 },
                    universal: { vagas: 9, candidatos: 118, candidatosPorVaga: 13.11 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 7, candidatos: 60, candidatosPorVaga: 8.57 },
                    universal: { vagas: 9, candidatos: 89, candidatosPorVaga: 9.89 }
                },
                2018: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 7, candidatos: 60, candidatosPorVaga: 8.57 },
                    universal: { vagas: 9, candidatos: 95, candidatosPorVaga: 10.56 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica: { vagas: 7, candidatos: 44, candidatosPorVaga: 6.29 },
                    universal: { vagas: 9, candidatos: 109, candidatosPorVaga: 12.11 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 15, candidatos: 45, candidatosPorVaga: 3.00 },
                    universal: { vagas: 18, candidatos: 90, candidatosPorVaga: 5.00 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 8, candidatos: 39, candidatosPorVaga: 4.88 },
                    universal: { vagas: 9, candidatos: 62, candidatosPorVaga: 6.89 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 4, candidatos: 7, candidatosPorVaga: 1.75 },
                    publica: { vagas: 15, candidatos: 65, candidatosPorVaga: 4.33 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 14, candidatos: 72, candidatosPorVaga: 5.14 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 4, candidatos: 5, candidatosPorVaga: 1.25 },
                    publica: { vagas: 15, candidatos: 45, candidatosPorVaga: 3.00 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 14, candidatos: 76, candidatosPorVaga: 5.43 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 5, candidatos: 9, candidatosPorVaga: 1.80 },
                    publica: { vagas: 6, candidatos: 68, candidatosPorVaga: 11.33 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 18, candidatos: 85, candidatosPorVaga: 4.72 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 6, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 5, candidatos: 9, candidatosPorVaga: 1.80 },
                    publica: { vagas: 6, candidatos: 75, candidatosPorVaga: 12.50 },
                    pcd: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    universal: { vagas: 18, candidatos: 84, candidatosPorVaga: 4.67 }
                }
            }
        },
        {
            id: 15,
            nome: 'Educação Física - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 20, candidatosPorVaga: 10 },
                    publica: { vagas: 7, candidatos: 190, candidatosPorVaga: 27.14 },
                    universal: { vagas: 9, candidatos: 134, candidatosPorVaga: 14.88 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 19, candidatosPorVaga: 9.5 },
                    publica: { vagas: 7, candidatos: 130, candidatosPorVaga: 18.57 },
                    universal: { vagas: 9, candidatos: 107, candidatosPorVaga: 11.89 }
                },
                2018: {
                    negro: { vagas: 2, candidatos: 16, candidatosPorVaga: 8.00 },
                    publica: { vagas: 7, candidatos: 114, candidatosPorVaga: 16.29 },
                    universal: { vagas: 9, candidatos: 103, candidatosPorVaga: 11.44 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica: { vagas: 7, candidatos: 120, candidatosPorVaga: 17.14 },
                    universal: { vagas: 9, candidatos: 132, candidatosPorVaga: 14.67 }
                },
                2020: {
                    negro: { vagas: 4, candidatos: 5, candidatosPorVaga: 1.25 },
                    publica: { vagas: 15, candidatos: 70, candidatosPorVaga: 4.67 },
                    universal: { vagas: 18, candidatos: 76, candidatosPorVaga: 4.22 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica: { vagas: 8, candidatos: 79, candidatosPorVaga: 9.88 },
                    universal: { vagas: 9, candidatos: 63, candidatosPorVaga: 7.00 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 4, candidatos: 9, candidatosPorVaga: 2.25 },
                    publica: { vagas: 15, candidatos: 90, candidatosPorVaga: 6.00 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 72, candidatosPorVaga: 5.14 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 15, candidatosPorVaga: 7.50 },
                    publica_negro: { vagas: 4, candidatos: 46, candidatosPorVaga: 11.50 },
                    publica: { vagas: 15, candidatos: 387, candidatosPorVaga: 25.80 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 14, candidatos: 226, candidatosPorVaga: 16.14 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 18, candidatosPorVaga: 9.00 },
                    publica_negro: { vagas: 5, candidatos: 36, candidatosPorVaga: 7.20 },
                    publica: { vagas: 6, candidatos: 231, candidatosPorVaga: 38.50 },
                    pcd: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    universal: { vagas: 18, candidatos: 152, candidatosPorVaga: 8.44 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 17, candidatosPorVaga: 8.50 },
                    publica_negro: { vagas: 5, candidatos: 30, candidatosPorVaga: 6.00 },
                    publica: { vagas: 6, candidatos: 218, candidatosPorVaga: 36.33 },
                    pcd: { vagas: 2, candidatos: 6, candidatosPorVaga: 3.00 },
                    universal: { vagas: 18, candidatos: 131, candidatosPorVaga: 7.28 }
                }
            }
        },
        {
            id: 16,
            nome: 'Enfermagem - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 7, candidatosPorVaga: 7 },
                    publica: { vagas: 6, candidatos: 109, candidatosPorVaga: 18.16 },
                    universal: { vagas: 7, candidatos: 133, candidatosPorVaga: 19 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2 },
                    publica: { vagas: 6, candidatos: 112, candidatosPorVaga: 18.67 },
                    universal: { vagas: 7, candidatos: 122, candidatosPorVaga: 17.43 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 6, candidatos: 110, candidatosPorVaga: 18.33 },
                    universal: { vagas: 8, candidatos: 110, candidatosPorVaga: 13.75 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 10, candidatosPorVaga: 10.00 },
                    publica: { vagas: 6, candidatos: 131, candidatosPorVaga: 21.83 },
                    universal: { vagas: 8, candidatos: 160, candidatosPorVaga: 20.00 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    publica: { vagas: 12, candidatos: 78, candidatosPorVaga: 6.50 },
                    universal: { vagas: 15, candidatos: 131, candidatosPorVaga: 8.73 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 7, candidatosPorVaga: 3.50 },
                    publica: { vagas: 6, candidatos: 105, candidatosPorVaga: 17.50 },
                    universal: { vagas: 7, candidatos: 156, candidatosPorVaga: 22.29 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 6, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 3, candidatos: 12, candidatosPorVaga: 4.00 },
                    publica: { vagas: 12, candidatos: 90, candidatosPorVaga: 7.50 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 85, candidatosPorVaga: 7.73 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica_negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    publica: { vagas: 12, candidatos: 81, candidatosPorVaga: 6.75 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 67, candidatosPorVaga: 6.09 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica_negro: { vagas: 4, candidatos: 6, candidatosPorVaga: 1.50 },
                    publica: { vagas: 5, candidatos: 82, candidatosPorVaga: 16.40 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 14, candidatos: 68, candidatosPorVaga: 4.86 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 4, candidatos: 7, candidatosPorVaga: 1.75 },
                    publica: { vagas: 5, candidatos: 62, candidatosPorVaga: 12.40 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 14, candidatos: 54, candidatosPorVaga: 3.86 }
                }
            }
        },
        {
            id: 17,
            nome: 'Engenharia Civil - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.5 },
                    publica: { vagas: 7, candidatos: 152, candidatosPorVaga: 21.71 },
                    universal: { vagas: 9, candidatos: 280, candidatosPorVaga: 31.11 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.5 },
                    publica: { vagas: 7, candidatos: 111, candidatosPorVaga: 15.86 },
                    universal: { vagas: 9, candidatos: 181, candidatosPorVaga: 20.11 }
                },
                2018: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 7, candidatos: 91, candidatosPorVaga: 13.00 },
                    universal: { vagas: 9, candidatos: 153, candidatosPorVaga: 17.00 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 7, candidatos: 68, candidatosPorVaga: 9.71 },
                    universal: { vagas: 9, candidatos: 137, candidatosPorVaga: 15.22 }
                },
                2020: {
                    negro: { vagas: 4, candidatos: 2, candidatosPorVaga: 0.50 },
                    publica: { vagas: 15, candidatos: 87, candidatosPorVaga: 5.80 },
                    universal: { vagas: 18, candidatos: 178, candidatosPorVaga: 9.89 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 8, candidatos: 77, candidatosPorVaga: 9.63 },
                    universal: { vagas: 9, candidatos: 151, candidatosPorVaga: 16.78 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 15, candidatos: 45, candidatosPorVaga: 3.00 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 83, candidatosPorVaga: 5.93 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 15, candidatos: 34, candidatosPorVaga: 2.27 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 14, candidatos: 60, candidatosPorVaga: 4.29 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 4, candidatos: 4, candidatosPorVaga: 1.00 },
                    publica: { vagas: 5, candidatos: 33, candidatosPorVaga: 6.60 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 17, candidatos: 78, candidatosPorVaga: 4.59 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 5, candidatos: 26, candidatosPorVaga: 5.20 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 17, candidatos: 48, candidatosPorVaga: 2.82 }
                }
            }
        },
        {
            id: 18,
            nome: 'Engenharia de Alimentos - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 4, candidatosPorVaga: 4 },
                    publica: { vagas: 6, candidatos: 35, candidatosPorVaga: 5.83 },
                    universal: { vagas: 7, candidatos: 51, candidatosPorVaga: 7.28 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 7, candidatos: 20, candidatosPorVaga: 2.86 },
                    universal: { vagas: 7, candidatos: 37, candidatosPorVaga: 5.29 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 6, candidatos: 27, candidatosPorVaga: 4.50 },
                    universal: { vagas: 8, candidatos: 38, candidatosPorVaga: 4.75 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 15, candidatosPorVaga: 2.14 },
                    universal: { vagas: 8, candidatos: 38, candidatosPorVaga: 4.75 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 11, candidatosPorVaga: 0.92 },
                    universal: { vagas: 15, candidatos: 35, candidatosPorVaga: 2.33 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 13, candidatosPorVaga: 1.63 },
                    universal: { vagas: 7, candidatos: 27, candidatosPorVaga: 3.86 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 11, candidatosPorVaga: 0.92 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 23, candidatosPorVaga: 2.09 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 15, candidatosPorVaga: 1.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 21, candidatosPorVaga: 1.91 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 11, candidatosPorVaga: 2.75 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 14, candidatosPorVaga: 1.27 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 8, candidatosPorVaga: 2.00 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 12, candidatosPorVaga: 1.09 }
                }
            }
        },
        {
            id: 19,
            nome: 'Engenharia de Computação - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 71, candidatosPorVaga: 8.875 },
                    universal: { vagas: 8, candidatos: 113, candidatosPorVaga: 14.12 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 42, candidatosPorVaga: 4.67 },
                    universal: { vagas: 8, candidatos: 103, candidatosPorVaga: 12.88 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 7, candidatos: 43, candidatosPorVaga: 6.14 },
                    universal: { vagas: 9, candidatos: 86, candidatosPorVaga: 9.56 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 7, candidatos: 38, candidatosPorVaga: 5.43 },
                    universal: { vagas: 9, candidatos: 97, candidatosPorVaga: 10.78 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 14, candidatos: 53, candidatosPorVaga: 3.79 },
                    universal: { vagas: 17, candidatos: 150, candidatosPorVaga: 8.82 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 7, candidatos: 45, candidatosPorVaga: 6.43 },
                    universal: { vagas: 8, candidatos: 160, candidatosPorVaga: 20.00 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 14, candidatos: 32, candidatosPorVaga: 2.29 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 13, candidatos: 130, candidatosPorVaga: 10.00 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 14, candidatos: 28, candidatosPorVaga: 2.00 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 13, candidatos: 99, candidatosPorVaga: 7.62 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 5, candidatos: 48, candidatosPorVaga: 9.60 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 14, candidatos: 80, candidatosPorVaga: 5.71 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 5, candidatos: 34, candidatosPorVaga: 6.80 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 14, candidatos: 81, candidatosPorVaga: 5.79 }
                }
            }
        },
        {
            id: 20,
            nome: 'Engenharia de Materiais - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.5 },
                    publica: { vagas: 7, candidatos: 29, candidatosPorVaga: 4.14 },
                    universal: { vagas: 9, candidatos: 88, candidatosPorVaga: 9.77 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 42, candidatosPorVaga: 4.67 },
                    universal: { vagas: 9, candidatos: 68, candidatosPorVaga: 7.56 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 8, candidatos: 13, candidatosPorVaga: 1.63 },
                    universal: { vagas: 9, candidatos: 59, candidatosPorVaga: 6.56 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 19, candidatosPorVaga: 2.11 },
                    universal: { vagas: 9, candidatos: 46, candidatosPorVaga: 5.11 }
                },
                2020: {
                    negro: { vagas: 4, candidatos: 1, candidatosPorVaga: 0.25 },
                    publica: { vagas: 15, candidatos: 11, candidatosPorVaga: 0.73 },
                    universal: { vagas: 18, candidatos: 44, candidatosPorVaga: 2.44 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 8, candidatos: 14, candidatosPorVaga: 1.75 },
                    universal: { vagas: 9, candidatos: 32, candidatosPorVaga: 3.56 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 15, candidatos: 9, candidatosPorVaga: 0.60 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 26, candidatosPorVaga: 1.86 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 4, candidatos: 1, candidatosPorVaga: 0.25 },
                    publica: { vagas: 15, candidatos: 6, candidatosPorVaga: 0.40 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 25, candidatosPorVaga: 1.79 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 20, candidatosPorVaga: 1.43 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 4, candidatos: 2, candidatosPorVaga: 0.50 },
                    publica: { vagas: 5, candidatos: 9, candidatosPorVaga: 1.80 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 14, candidatos: 23, candidatosPorVaga: 1.64 }
                }
            }
        },
        {
            id: 21,
            nome: 'Engenharia de Software - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3 },
                    publica: { vagas: 6, candidatos: 86, candidatosPorVaga: 14.333 },
                    universal: { vagas: 7, candidatos: 118, candidatosPorVaga: 16.857 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.5 },
                    publica: { vagas: 6, candidatos: 73, candidatosPorVaga: 12.17 },
                    universal: { vagas: 7, candidatos: 103, candidatosPorVaga: 14.71 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 12, candidatos: 55, candidatosPorVaga: 4.58 },
                    universal: { vagas: 15, candidatos: 110, candidatosPorVaga: 7.33 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 4, candidatosPorVaga: 4.00 },
                    publica: { vagas: 6, candidatos: 88, candidatosPorVaga: 14.67 },
                    universal: { vagas: 8, candidatos: 126, candidatosPorVaga: 15.75 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 12, candidatos: 71, candidatosPorVaga: 5.92 },
                    universal: { vagas: 15, candidatos: 150, candidatosPorVaga: 10.00 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica: { vagas: 6, candidatos: 89, candidatosPorVaga: 14.83 },
                    universal: { vagas: 7, candidatos: 180, candidatosPorVaga: 25.71 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    publica: { vagas: 12, candidatos: 173, candidatosPorVaga: 14.42 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 11, candidatos: 222, candidatosPorVaga: 20.18 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.50 },
                    publica_negro: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    publica: { vagas: 12, candidatos: 151, candidatosPorVaga: 12.58 },
                    pcd: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    universal: { vagas: 11, candidatos: 171, candidatosPorVaga: 15.55 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 15, candidatosPorVaga: 7.50 },
                    publica_negro: { vagas: 3, candidatos: 11, candidatosPorVaga: 3.67 },
                    publica: { vagas: 4, candidatos: 160, candidatosPorVaga: 40.00 },
                    pcd: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    universal: { vagas: 13, candidatos: 184, candidatosPorVaga: 14.15 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 16, candidatosPorVaga: 8.00 },
                    publica_negro: { vagas: 3, candidatos: 16, candidatosPorVaga: 5.33 },
                    publica: { vagas: 4, candidatos: 156, candidatosPorVaga: 39.00 },
                    pcd: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.50 },
                    universal: { vagas: 13, candidatos: 176, candidatosPorVaga: 13.54 }
                }
            }
        },
        {
            id: 22,
            nome: 'Farmácia - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 62, candidatosPorVaga: 10.333 },
                    universal: { vagas: 8, candidatos: 117, candidatosPorVaga: 14.625 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 8, candidatos: 58, candidatosPorVaga: 7.25 },
                    universal: { vagas: 8, candidatos: 91, candidatosPorVaga: 11.38 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 7, candidatos: 53, candidatosPorVaga: 7.57 },
                    universal: { vagas: 9, candidatos: 95, candidatosPorVaga: 10.56 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 7, candidatos: 54, candidatosPorVaga: 7.71 },
                    universal: { vagas: 9, candidatos: 101, candidatosPorVaga: 11.22 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 14, candidatos: 67, candidatosPorVaga: 4.79 },
                    universal: { vagas: 17, candidatos: 125, candidatosPorVaga: 7.35 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 7, candidatos: 58, candidatosPorVaga: 8.29 },
                    universal: { vagas: 8, candidatos: 107, candidatosPorVaga: 13.38 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 14, candidatos: 57, candidatosPorVaga: 4.07 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 13, candidatos: 76, candidatosPorVaga: 5.85 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 14, candidatos: 48, candidatosPorVaga: 3.43 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 13, candidatos: 79, candidatosPorVaga: 6.08 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 5, candidatos: 69, candidatosPorVaga: 13.80 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 14, candidatos: 73, candidatosPorVaga: 5.21 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 4, candidatos: 4, candidatosPorVaga: 1.00 },
                    publica: { vagas: 5, candidatos: 55, candidatosPorVaga: 11.00 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 14, candidatos: 77, candidatosPorVaga: 5.50 }
                }
            }
        },
        {
            id: 23,
            nome: 'Física - bacharelado - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 4, candidatos: 10, candidatosPorVaga: 2.5 },
                    universal: { vagas: 5, candidatos: 15, candidatosPorVaga: 3 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 16, candidatosPorVaga: 3.2 },
                    universal: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.4 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    universal: { vagas: 5, candidatos: 23, candidatosPorVaga: 4.60 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 8, candidatosPorVaga: 1.60 },
                    universal: { vagas: 5, candidatos: 10, candidatosPorVaga: 2.00 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 5, candidatosPorVaga: 0.56 },
                    universal: { vagas: 11, candidatos: 19, candidatosPorVaga: 1.73 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 8, candidatosPorVaga: 1.33 },
                    universal: { vagas: 6, candidatos: 10, candidatosPorVaga: 1.67 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 3, candidatosPorVaga: 0.33 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 13, candidatosPorVaga: 1.44 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 7, candidatosPorVaga: 0.78 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 10, candidatosPorVaga: 1.11 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 5, candidatosPorVaga: 0.56 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 12, candidatosPorVaga: 1.33 }
                }
            }
        },
        {
            id: 24,
            nome: 'Física - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 4, candidatos: 25, candidatosPorVaga: 6.25 },
                    universal: { vagas: 5, candidatos: 27, candidatosPorVaga: 5.4 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 16, candidatosPorVaga: 3.2 },
                    universal: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.4 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 7, candidatosPorVaga: 1.75 },
                    universal: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.40 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 10, candidatosPorVaga: 2.00 },
                    universal: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.40 }
                },
                2020: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 9, candidatos: 6, candidatosPorVaga: 0.67 },
                    universal: { vagas: 11, candidatos: 12, candidatosPorVaga: 1.09 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 7, candidatosPorVaga: 1.17 },
                    universal: { vagas: 6, candidatos: 12, candidatosPorVaga: 2.00 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 7, candidatosPorVaga: 0.78 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 4, candidatosPorVaga: 0.44 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 9, candidatos: 17, candidatosPorVaga: 1.89 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 22, candidatosPorVaga: 2.44 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 3, candidatos: 30, candidatosPorVaga: 10.00 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 24, candidatosPorVaga: 2.67 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 11, candidatosPorVaga: 1.22 }
                }
            }
        },
        {
            id: 25,
            nome: 'Geografia - bacharelado - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 9, candidatosPorVaga: 1.286 },
                    universal: { vagas: 7, candidatos: 22, candidatosPorVaga: 3.143 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 14, candidatosPorVaga: 1.75 },
                    universal: { vagas: 7, candidatos: 24, candidatosPorVaga: 3.43 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 6, candidatosPorVaga: 0.86 },
                    universal: { vagas: 8, candidatos: 16, candidatosPorVaga: 2.00 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 6, candidatosPorVaga: 1.00 },
                    universal: { vagas: 9, candidatos: 13, candidatosPorVaga: 1.44 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 2, candidatosPorVaga: 0.17 },
                    universal: { vagas: 15, candidatos: 5, candidatosPorVaga: 0.33 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 11, candidatosPorVaga: 1.83 },
                    universal: { vagas: 7, candidatos: 8, candidatosPorVaga: 1.14 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 3, candidatosPorVaga: 0.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 9, candidatosPorVaga: 0.82 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 12, candidatos: 10, candidatosPorVaga: 0.83 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 7, candidatosPorVaga: 0.64 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 2, candidatosPorVaga: 0.50 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 1, candidatosPorVaga: 0.09 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 5, candidatosPorVaga: 0.45 }
                }
            }
        },
        {
            id: 26,
            nome: 'Geografia - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.5 },
                    publica: { vagas: 6, candidatos: 45, candidatosPorVaga: 7.5 },
                    universal: { vagas: 8, candidatos: 37, candidatosPorVaga: 4.625 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 16, candidatosPorVaga: 2.67 },
                    universal: { vagas: 7, candidatos: 28, candidatosPorVaga: 4 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 7, candidatos: 25, candidatosPorVaga: 3.57 },
                    universal: { vagas: 8, candidatos: 30, candidatosPorVaga: 3.75 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 6, candidatos: 15, candidatosPorVaga: 2.50 },
                    universal: { vagas: 8, candidatos: 17, candidatosPorVaga: 2.13 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 7, candidatosPorVaga: 0.58 },
                    universal: { vagas: 15, candidatos: 11, candidatosPorVaga: 0.73 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 11, candidatosPorVaga: 1.83 },
                    universal: { vagas: 7, candidatos: 11, candidatosPorVaga: 1.57 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 11, candidatosPorVaga: 0.92 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 10, candidatosPorVaga: 0.91 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 12, candidatos: 43, candidatosPorVaga: 3.58 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 35, candidatosPorVaga: 3.18 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 29, candidatosPorVaga: 7.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 18, candidatosPorVaga: 1.64 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 4, candidatos: 23, candidatosPorVaga: 5.75 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 21, candidatosPorVaga: 1.91 }
                }
            }
        },
        {
            id: 27,
            nome: 'História - bacharelado - Vespertino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 13, candidatosPorVaga: 2.167 },
                    universal: { vagas: 7, candidatos: 24, candidatosPorVaga: 3.429 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 6, candidatos: 8, candidatosPorVaga: 1.33 },
                    universal: { vagas: 8, candidatos: 17, candidatosPorVaga: 2.13 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 4, candidatosPorVaga: 0.33 },
                    universal: { vagas: 15, candidatos: 16, candidatosPorVaga: 1.07 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 2, candidatosPorVaga: 0.25 },
                    universal: { vagas: 7, candidatos: 15, candidatosPorVaga: 2.14 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 3, candidatosPorVaga: 0.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 16, candidatosPorVaga: 1.45 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 2, candidatosPorVaga: 0.17 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 9, candidatosPorVaga: 0.82 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 7, candidatosPorVaga: 1.75 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 4, candidatosPorVaga: 0.36 }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 5, candidatosPorVaga: 1.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 9, candidatosPorVaga: 0.82 }
                }
            }
        },
        {
            id: 28,
            nome: 'História - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 6, candidatosPorVaga: 6 },
                    publica: { vagas: 6, candidatos: 101, candidatosPorVaga: 16.833 },
                    universal: { vagas: 7, candidatos: 90, candidatosPorVaga: 12.857 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 6, candidatosPorVaga: 3 },
                    publica: { vagas: 8, candidatos: 64, candidatosPorVaga: 8 },
                    universal: { vagas: 9, candidatos: 95, candidatosPorVaga: 10.56 }
                },
                2018: {
                    negro: { vagas: 5, candidatos: 5, candidatosPorVaga: 1.00 },
                    publica: { vagas: 21, candidatos: 65, candidatosPorVaga: 3.10 },
                    universal: { vagas: 26, candidatos: 71, candidatosPorVaga: 2.73 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 5, candidatosPorVaga: 5.00 },
                    publica: { vagas: 6, candidatos: 54, candidatosPorVaga: 9.00 },
                    universal: { vagas: 8, candidatos: 54, candidatosPorVaga: 6.75 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 12, candidatos: 43, candidatosPorVaga: 3.58 },
                    universal: { vagas: 15, candidatos: 50, candidatosPorVaga: 3.33 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 37, candidatosPorVaga: 4.63 },
                    universal: { vagas: 7, candidatos: 57, candidatosPorVaga: 8.14 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 12, candidatos: 43, candidatosPorVaga: 3.58 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 46, candidatosPorVaga: 4.18 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 6, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 3, candidatos: 20, candidatosPorVaga: 6.67 },
                    publica: { vagas: 12, candidatos: 154, candidatosPorVaga: 12.83 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 11, candidatos: 108, candidatosPorVaga: 9.82 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 3, candidatos: 7, candidatosPorVaga: 2.33 },
                    publica: { vagas: 4, candidatos: 74, candidatosPorVaga: 18.50 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 11, candidatos: 63, candidatosPorVaga: 5.73 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.50 },
                    publica_negro: { vagas: 3, candidatos: 7, candidatosPorVaga: 2.33 },
                    publica: { vagas: 4, candidatos: 64, candidatosPorVaga: 16.00 },
                    pcd: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    universal: { vagas: 11, candidatos: 68, candidatosPorVaga: 6.18 }
                }
            }
        },
        {
            id: 29,
            nome: 'Jornalismo - bacharelado - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2 },
                    publica: { vagas: 6, candidatos: 55, candidatosPorVaga: 9.167 },
                    universal: { vagas: 7, candidatos: 95, candidatosPorVaga: 13.571 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 7, candidatos: 26, candidatosPorVaga: 3.71 },
                    universal: { vagas: 7, candidatos: 68, candidatosPorVaga: 9.71 }
                },
                2018: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 6, candidatos: 32, candidatosPorVaga: 5.33 },
                    universal: { vagas: 7, candidatos: 62, candidatosPorVaga: 8.86 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 6, candidatos: 31, candidatosPorVaga: 5.17 },
                    universal: { vagas: 7, candidatos: 74, candidatosPorVaga: 10.57 }
                },
                2020: {
                    negro: { vagas: 4, candidatos: 1, candidatosPorVaga: 0.25 },
                    publica: { vagas: 12, candidatos: 27, candidatosPorVaga: 2.25 },
                    universal: { vagas: 15, candidatos: 70, candidatosPorVaga: 4.67 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 6, candidatos: 34, candidatosPorVaga: 5.67 },
                    universal: { vagas: 8, candidatos: 98, candidatosPorVaga: 12.25 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 12, candidatos: 27, candidatosPorVaga: 2.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 12, candidatos: 59, candidatosPorVaga: 4.92 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 29, candidatosPorVaga: 2.42 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 12, candidatos: 38, candidatosPorVaga: 3.17 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 31, candidatosPorVaga: 7.75 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 12, candidatos: 38, candidatosPorVaga: 3.17 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 22, candidatosPorVaga: 5.50 },
                    pcd: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    universal: { vagas: 12, candidatos: 33, candidatosPorVaga: 2.75 }
                }
            }
        },
        {
            id: 30,
            nome: 'Letras - licenciatura - Português/Francês - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 9, candidatosPorVaga: 2.25 },
                    universal: { vagas: 4, candidatos: 17, candidatosPorVaga: 4.25 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 7, candidatosPorVaga: 1.75 },
                    universal: { vagas: 4, candidatos: 10, candidatosPorVaga: 2.5 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    universal: { vagas: 4, candidatos: 9, candidatosPorVaga: 2.25 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 6, candidatos: 13, candidatosPorVaga: 2.17 }
                },
                2020: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 3, candidatosPorVaga: 0.50 },
                    universal: { vagas: 8, candidatos: 8, candidatosPorVaga: 1.00 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 8, candidatos: 7, candidatosPorVaga: 0.88 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                }
            }
        },
        {
            id: 31,
            nome: 'Letras - licenciatura - Português/Inglês - Vespertino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 27, candidatosPorVaga: 6.75 },
                    universal: { vagas: 5, candidatos: 27, candidatosPorVaga: 5.4 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 12, candidatosPorVaga: 2.4 },
                    universal: { vagas: 5, candidatos: 24, candidatosPorVaga: 4.8 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.40 },
                    universal: { vagas: 5, candidatos: 22, candidatosPorVaga: 4.40 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 13, candidatosPorVaga: 2.60 },
                    universal: { vagas: 5, candidatos: 22, candidatosPorVaga: 4.40 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 10, candidatosPorVaga: 1.11 },
                    universal: { vagas: 11, candidatos: 13, candidatosPorVaga: 1.18 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 5, candidatosPorVaga: 0.83 },
                    universal: { vagas: 6, candidatos: 27, candidatosPorVaga: 4.50 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica_negro: { vagas: 6, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 16, candidatosPorVaga: 2.00 },
                    pcd: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    universal: { vagas: 24, candidatos: 39, candidatosPorVaga: 1.63 }
                }
            }
        },
        {
            id: 32,
            nome: 'Letras - licenciatura - Português/Inglês - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3 },
                    publica: { vagas: 4, candidatos: 41, candidatosPorVaga: 10.25 },
                    universal: { vagas: 5, candidatos: 51, candidatosPorVaga: 10.2 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 21, candidatosPorVaga: 4.2 },
                    universal: { vagas: 5, candidatos: 45, candidatosPorVaga: 9 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 4, candidatos: 26, candidatosPorVaga: 6.50 },
                    universal: { vagas: 5, candidatos: 46, candidatosPorVaga: 9.20 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 33, candidatosPorVaga: 6.60 },
                    universal: { vagas: 5, candidatos: 45, candidatosPorVaga: 9.00 }
                },
                2020: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 9, candidatos: 19, candidatosPorVaga: 2.11 },
                    universal: { vagas: 11, candidatos: 23, candidatosPorVaga: 2.09 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 21, candidatosPorVaga: 3.50 },
                    universal: { vagas: 6, candidatos: 22, candidatosPorVaga: 3.67 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    publica_negro: { vagas: 6, candidatos: 5, candidatosPorVaga: 0.83 },
                    publica: { vagas: 8, candidatos: 55, candidatosPorVaga: 6.88 },
                    pcd: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    universal: { vagas: 24, candidatos: 55, candidatosPorVaga: 2.29 }
                }
            }
        },
        {
            id: 33,
            nome: 'Letras - licenciatura - Português/Espanhol - Vespertino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 4, candidatos: 14, candidatosPorVaga: 3.5 },
                    universal: { vagas: 5, candidatos: 13, candidatosPorVaga: 2.6 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 4, candidatos: 10, candidatosPorVaga: 2.5 },
                    universal: { vagas: 5, candidatos: 9, candidatosPorVaga: 1.8 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    universal: { vagas: 5, candidatos: 6, candidatosPorVaga: 1.20 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 9, candidatosPorVaga: 2.25 },
                    universal: { vagas: 5, candidatos: 10, candidatosPorVaga: 2.00 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 3, candidatosPorVaga: 0.33 },
                    universal: { vagas: 11, candidatos: 3, candidatosPorVaga: 0.27 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 1, candidatosPorVaga: 0.17 },
                    universal: { vagas: 6, candidatos: 3, candidatosPorVaga: 0.50 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                }
            }
        },
        {
            id: 34,
            nome: 'Letras - licenciatura - Português/Espanhol - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 4, candidatosPorVaga: 4 },
                    publica: { vagas: 4, candidatos: 24, candidatosPorVaga: 6 },
                    universal: { vagas: 5, candidatos: 28, candidatosPorVaga: 5.6 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 16, candidatosPorVaga: 3.2 },
                    universal: { vagas: 5, candidatos: 23, candidatosPorVaga: 4.6 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 4, candidatos: 25, candidatosPorVaga: 6.25 },
                    universal: { vagas: 5, candidatos: 15, candidatosPorVaga: 3.00 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 4, candidatos: 13, candidatosPorVaga: 3.25 },
                    universal: { vagas: 5, candidatos: 9, candidatosPorVaga: 1.80 }
                },
                2020: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 9, candidatos: 7, candidatosPorVaga: 0.78 },
                    universal: { vagas: 11, candidatos: 11, candidatosPorVaga: 1.00 }
                },
                2021: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    universal: { vagas: 6, candidatos: 4, candidatosPorVaga: 0.67 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2025: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                }
            }
        },
        {
            id: 35,
            nome: 'Matemática - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.5 },
                    publica: { vagas: 9, candidatos: 50, candidatosPorVaga: 5.556 },
                    universal: { vagas: 11, candidatos: 39, candidatosPorVaga: 3.545 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 10, candidatos: 24, candidatosPorVaga: 2.4 },
                    universal: { vagas: 11, candidatos: 37, candidatosPorVaga: 3.36 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 9, candidatos: 26, candidatosPorVaga: 2.89 },
                    universal: { vagas: 10, candidatos: 20, candidatosPorVaga: 2.00 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 11, candidatos: 15, candidatosPorVaga: 1.36 },
                    universal: { vagas: 11, candidatos: 28, candidatosPorVaga: 2.55 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 18, candidatos: 4, candidatosPorVaga: 0.22 },
                    universal: { vagas: 22, candidatos: 17, candidatosPorVaga: 0.77 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 13, candidatosPorVaga: 1.08 },
                    universal: { vagas: 11, candidatos: 21, candidatosPorVaga: 1.91 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 5, candidatos: 1, candidatosPorVaga: 0.20 },
                    publica: { vagas: 18, candidatos: 17, candidatosPorVaga: 0.94 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 18, candidatos: 13, candidatosPorVaga: 0.72 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 5, candidatos: 2, candidatosPorVaga: 0.40 },
                    publica: { vagas: 18, candidatos: 38, candidatosPorVaga: 2.11 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 18, candidatos: 48, candidatosPorVaga: 2.67 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 5, candidatos: 2, candidatosPorVaga: 0.40 },
                    publica: { vagas: 6, candidatos: 23, candidatosPorVaga: 3.83 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 18, candidatos: 43, candidatosPorVaga: 2.39 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 5, candidatos: 2, candidatosPorVaga: 0.40 },
                    publica: { vagas: 6, candidatos: 25, candidatosPorVaga: 4.17 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 18, candidatos: 27, candidatosPorVaga: 1.50 }
                }
            }
        },
        {
            id: 36,
            nome: 'Matemática Aplicada - bacharelado - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 11, candidatos: 4, candidatosPorVaga: 0.364 },
                    universal: { vagas: 11, candidatos: 4, candidatosPorVaga: 0.364 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 3, candidatos: 3, candidatosPorVaga: 1 },
                    universal: { vagas: 7, candidatos: 5, candidatosPorVaga: 0.71 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 3, candidatosPorVaga: 0.60 },
                    universal: { vagas: 5, candidatos: 8, candidatosPorVaga: 1.60 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 8, candidatos: 10, candidatosPorVaga: 1.25 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 2, candidatosPorVaga: 0.22 },
                    universal: { vagas: 11, candidatos: 6, candidatosPorVaga: 0.55 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 2, candidatosPorVaga: 0.33 },
                    universal: { vagas: 6, candidatos: 5, candidatosPorVaga: 0.83 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 2, candidatosPorVaga: 0.22 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 6, candidatosPorVaga: 0.67 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    pcd: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 5, candidatosPorVaga: 0.56 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    pcd: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    universal: { vagas: 9, candidatos: 5, candidatosPorVaga: 0.56 }
                }
            }
        },
        {
            id: 37,
            nome: 'Medicina - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 46, candidatosPorVaga: 46 },
                    publica: { vagas: 6, candidatos: 617, candidatosPorVaga: 102.833 },
                    universal: { vagas: 7, candidatos: 1615, candidatosPorVaga: 230.714 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 54, candidatosPorVaga: 27 },
                    publica: { vagas: 6, candidatos: 587, candidatosPorVaga: 97.83 },
                    universal: { vagas: 7, candidatos: 1505, candidatosPorVaga: 215 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 46, candidatosPorVaga: 46.00 },
                    publica: { vagas: 6, candidatos: 616, candidatosPorVaga: 102.67 },
                    universal: { vagas: 8, candidatos: 1582, candidatosPorVaga: 197.75 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 32, candidatosPorVaga: 32.00 },
                    publica: { vagas: 6, candidatos: 477, candidatosPorVaga: 79.50 },
                    universal: { vagas: 8, candidatos: 1414, candidatosPorVaga: 176.75 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 59, candidatosPorVaga: 19.67 },
                    publica: { vagas: 12, candidatos: 1013, candidatosPorVaga: 84.42 },
                    universal: { vagas: 15, candidatos: 3673, candidatosPorVaga: 244.87 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 54, candidatosPorVaga: 27.00 },
                    publica: { vagas: 6, candidatos: 828, candidatosPorVaga: 138.00 },
                    universal: { vagas: 7, candidatos: 3373, candidatosPorVaga: 481.86 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 65, candidatosPorVaga: 32.50 },
                    publica_negro: { vagas: 3, candidatos: 67, candidatosPorVaga: 22.33 },
                    publica: { vagas: 12, candidatos: 643, candidatosPorVaga: 53.58 },
                    pcd: { vagas: 2, candidatos: 32, candidatosPorVaga: 16.00 },
                    universal: { vagas: 11, candidatos: 2107, candidatosPorVaga: 191.55 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 83, candidatosPorVaga: 41.50 },
                    publica_negro: { vagas: 3, candidatos: 50, candidatosPorVaga: 16.67 },
                    publica: { vagas: 12, candidatos: 662, candidatosPorVaga: 55.17 },
                    pcd: { vagas: 2, candidatos: 47, candidatosPorVaga: 23.50 },
                    universal: { vagas: 11, candidatos: 1884, candidatosPorVaga: 171.27 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 86, candidatosPorVaga: 43.00 },
                    publica_negro: { vagas: 4, candidatos: 57, candidatosPorVaga: 14.25 },
                    publica: { vagas: 5, candidatos: 610, candidatosPorVaga: 122.00 },
                    pcd: { vagas: 2, candidatos: 79, candidatosPorVaga: 39.50 },
                    universal: { vagas: 14, candidatos: 1814, candidatosPorVaga: 129.57 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 124, candidatosPorVaga: 62.00 },
                    publica_negro: { vagas: 4, candidatos: 63, candidatosPorVaga: 15.75 },
                    publica: { vagas: 5, candidatos: 634, candidatosPorVaga: 126.80 },
                    pcd: { vagas: 2, candidatos: 95, candidatosPorVaga: 47.50 },
                    universal: { vagas: 14, candidatos: 2182, candidatosPorVaga: 155.86 }
                }
            }
        },
        {
            id: 38,
            nome: 'Música - licenciatura - Vespertino',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1 },
                    publica: { vagas: 6, candidatos: 15, candidatosPorVaga: 2.5 },
                    universal: { vagas: 7, candidatos: 33, candidatosPorVaga: 4.714 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 7, candidatos: 11, candidatosPorVaga: 1.57 },
                    universal: { vagas: 7, candidatos: 30, candidatosPorVaga: 4.29 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 17, candidatosPorVaga: 2.13 },
                    universal: { vagas: 7, candidatos: 17, candidatosPorVaga: 2.43 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 12, candidatosPorVaga: 1.50 },
                    universal: { vagas: 7, candidatos: 21, candidatosPorVaga: 3.00 }
                },
                2020: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 9, candidatosPorVaga: 1.50 },
                    universal: { vagas: 7, candidatos: 17, candidatosPorVaga: 2.43 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' }
                },
                2022: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 4, candidatosPorVaga: 0.67 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.40 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 6, candidatos: 21, candidatosPorVaga: 3.50 },
                    pcd: { vagas: 1, candidatos: 4, candidatosPorVaga: 4.00 },
                    universal: { vagas: 5, candidatos: 25, candidatosPorVaga: 5.00 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 2, candidatos: 16, candidatosPorVaga: 8.00 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.40 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 2, candidatos: 14, candidatosPorVaga: 7.00 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 5, candidatos: 16, candidatosPorVaga: 3.20 }
                }
            }
        },
        {
            id: 39,
            nome: 'Odontologia - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 15, candidatosPorVaga: 7.5 },
                    publica: { vagas: 9, candidatos: 192, candidatosPorVaga: 21.333 },
                    universal: { vagas: 11, candidatos: 356, candidatosPorVaga: 32.364 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.5 },
                    publica: { vagas: 9, candidatos: 171, candidatosPorVaga: 19 },
                    universal: { vagas: 11, candidatos: 326, candidatosPorVaga: 29.64 }
                },
                2018: {
                    negro: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    publica: { vagas: 9, candidatos: 157, candidatosPorVaga: 17.44 },
                    universal: { vagas: 10, candidatos: 275, candidatosPorVaga: 27.50 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica: { vagas: 9, candidatos: 139, candidatosPorVaga: 15.44 },
                    universal: { vagas: 11, candidatos: 241, candidatosPorVaga: 21.91 }
                },
                2020: {
                    negro: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    publica: { vagas: 18, candidatos: 136, candidatosPorVaga: 7.56 },
                    universal: { vagas: 22, candidatos: 312, candidatosPorVaga: 14.18 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    publica: { vagas: 9, candidatos: 117, candidatosPorVaga: 13.00 },
                    universal: { vagas: 11, candidatos: 303, candidatosPorVaga: 27.55 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    publica: { vagas: 18, candidatos: 111, candidatosPorVaga: 6.17 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 18, candidatos: 193, candidatosPorVaga: 10.72 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica_negro: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    publica: { vagas: 18, candidatos: 91, candidatosPorVaga: 5.06 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 18, candidatos: 161, candidatosPorVaga: 8.94 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 6, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 5, candidatos: 10, candidatosPorVaga: 2.00 },
                    publica: { vagas: 6, candidatos: 96, candidatosPorVaga: 16.00 },
                    pcd: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    universal: { vagas: 18, candidatos: 153, candidatosPorVaga: 8.50 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4.00 },
                    publica_negro: { vagas: 5, candidatos: 7, candidatosPorVaga: 1.40 },
                    publica: { vagas: 6, candidatos: 90, candidatosPorVaga: 15.00 },
                    pcd: { vagas: 2, candidatos: 4, candidatosPorVaga: 2.00 },
                    universal: { vagas: 18, candidatos: 206, candidatosPorVaga: 11.44 }
                }
            }
        },
        {
            id: 40,
            nome: 'Pedagogia - licenciatura - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 5, candidatosPorVaga: 5 },
                    publica: { vagas: 4, candidatos: 44, candidatosPorVaga: 11 },
                    universal: { vagas: 5, candidatos: 44, candidatosPorVaga: 8.8 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 4, candidatosPorVaga: 2 },
                    publica: { vagas: 5, candidatos: 42, candidatosPorVaga: 8.4 },
                    universal: { vagas: 6, candidatos: 24, candidatosPorVaga: 4 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 5, candidatos: 34, candidatosPorVaga: 6.80 },
                    universal: { vagas: 7, candidatos: 34, candidatosPorVaga: 4.86 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 5, candidatos: 36, candidatosPorVaga: 7.20 },
                    universal: { vagas: 7, candidatos: 34, candidatosPorVaga: 4.86 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 10, candidatos: 19, candidatosPorVaga: 1.90 },
                    universal: { vagas: 13, candidatos: 29, candidatosPorVaga: 2.23 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 5, candidatos: 17, candidatosPorVaga: 3.40 },
                    universal: { vagas: 6, candidatos: 18, candidatosPorVaga: 3.00 }
                },
                2022: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 11, candidatos: 32, candidatosPorVaga: 2.91 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 10, candidatos: 22, candidatosPorVaga: 2.20 }
                },
                2023: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica: { vagas: 11, candidatos: 118, candidatosPorVaga: 10.73 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 10, candidatos: 66, candidatosPorVaga: 6.60 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 5, candidatosPorVaga: 5.00 },
                    publica_negro: { vagas: 3, candidatos: 17, candidatosPorVaga: 5.67 },
                    publica: { vagas: 3, candidatos: 104, candidatosPorVaga: 34.67 },
                    pcd: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    universal: { vagas: 11, candidatos: 65, candidatosPorVaga: 5.91 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 7, candidatosPorVaga: 7.00 },
                    publica_negro: { vagas: 3, candidatos: 6, candidatosPorVaga: 2.00 },
                    publica: { vagas: 3, candidatos: 78, candidatosPorVaga: 26.00 },
                    pcd: { vagas: 1, candidatos: 4, candidatosPorVaga: 4.00 },
                    universal: { vagas: 11, candidatos: 41, candidatosPorVaga: 3.73 }
                }
            },
        },
        {
            id: 41,
            nome: 'Pedagogia - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 7, candidatosPorVaga: 3.5 },
                    publica: { vagas: 9, candidatos: 118, candidatosPorVaga: 13.111 },
                    universal: { vagas: 11, candidatos: 92, candidatosPorVaga: 8.364 }
                },
                2017: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1 },
                    publica: { vagas: 10, candidatos: 82, candidatosPorVaga: 8.2 },
                    universal: { vagas: 13, candidatos: 86, candidatosPorVaga: 6.62 }
                },
                2018: {
                    negro: { vagas: 2, candidatos: 11, candidatosPorVaga: 5.50 },
                    publica: { vagas: 11, candidatos: 105, candidatosPorVaga: 9.55 },
                    universal: { vagas: 13, candidatos: 80, candidatosPorVaga: 6.15 }
                },
                2019: {
                    negro: { vagas: 2, candidatos: 6, candidatosPorVaga: 3.00 },
                    publica: { vagas: 11, candidatos: 78, candidatosPorVaga: 7.09 },
                    universal: { vagas: 13, candidatos: 66, candidatosPorVaga: 5.08 }
                },
                2020: {
                    negro: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    publica: { vagas: 21, candidatos: 50, candidatosPorVaga: 2.38 },
                    universal: { vagas: 26, candidatos: 38, candidatosPorVaga: 1.46 }
                },
                2021: {
                    negro: { vagas: 3, candidatos: 8, candidatosPorVaga: 2.67 },
                    publica: { vagas: 10, candidatos: 59, candidatosPorVaga: 5.90 },
                    universal: { vagas: 13, candidatos: 45, candidatosPorVaga: 3.46 }
                },
                2022: {
                    negro: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    publica_negro: { vagas: 5, candidatos: 4, candidatosPorVaga: 0.80 },
                    publica: { vagas: 21, candidatos: 60, candidatosPorVaga: 2.86 },
                    pcd: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 20, candidatos: 36, candidatosPorVaga: 1.80 }
                },
                2023: {
                    negro: { vagas: 3, candidatos: 7, candidatosPorVaga: 2.33 },
                    publica_negro: { vagas: 5, candidatos: 20, candidatosPorVaga: 4.00 },
                    publica: { vagas: 21, candidatos: 258, candidatosPorVaga: 12.29 },
                    pcd: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    universal: { vagas: 20, candidatos: 140, candidatosPorVaga: 7.00 }
                },
                2024: {
                    negro: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 5, candidatos: 13, candidatosPorVaga: 2.60 },
                    publica: { vagas: 7, candidatos: 231, candidatosPorVaga: 33.00 },
                    pcd: { vagas: 3, candidatos: 5, candidatosPorVaga: 1.67 },
                    universal: { vagas: 20, candidatos: 94, candidatosPorVaga: 4.70 }
                },
                2025: {
                    negro: { vagas: 3, candidatos: 7, candidatosPorVaga: 2.33 },
                    publica_negro: { vagas: 5, candidatos: 16, candidatosPorVaga: 3.20 },
                    publica: { vagas: 7, candidatos: 164, candidatosPorVaga: 23.43 },
                    pcd: { vagas: 3, candidatos: 4, candidatosPorVaga: 1.33 },
                    universal: { vagas: 20, candidatos: 89, candidatosPorVaga: 4.45 }
                }
            }
        },
        {
            id: 42,
            nome: 'Química - licenciatura - Noturno',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 4, candidatos: 28, candidatosPorVaga: 7 },
                    universal: { vagas: 5, candidatos: 24, candidatosPorVaga: 4.8 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 4, candidatos: 20, candidatosPorVaga: 5 },
                    universal: { vagas: 5, candidatos: 32, candidatosPorVaga: 6.4 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 4, candidatos: 16, candidatosPorVaga: 4.00 },
                    universal: { vagas: 5, candidatos: 34, candidatosPorVaga: 6.80 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 4, candidatos: 14, candidatosPorVaga: 3.50 },
                    universal: { vagas: 5, candidatos: 27, candidatosPorVaga: 5.40 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 8, candidatosPorVaga: 0.89 },
                    universal: { vagas: 11, candidatos: 12, candidatosPorVaga: 1.09 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 3, candidatosPorVaga: 0.50 },
                    universal: { vagas: 6, candidatos: 10, candidatosPorVaga: 1.67 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 6, candidatosPorVaga: 0.67 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 11, candidatosPorVaga: 1.22 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica: { vagas: 9, candidatos: 40, candidatosPorVaga: 4.44 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 35, candidatosPorVaga: 3.89 }
                },
                2024: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica_negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 3, candidatos: 19, candidatosPorVaga: 6.33 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 29, candidatosPorVaga: 3.22 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica: { vagas: 3, candidatos: 17, candidatosPorVaga: 5.67 },
                    pcd: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    universal: { vagas: 9, candidatos: 18, candidatosPorVaga: 2.00 }
                }
            }
        },
        {
            id: 43,
            nome: 'Química Tecnológica - bacharelado - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2 },
                    publica: { vagas: 4, candidatos: 14, candidatosPorVaga: 3.5 },
                    universal: { vagas: 5, candidatos: 30, candidatosPorVaga: 6 }
                },
                2017: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 14, candidatosPorVaga: 2.8 },
                    universal: { vagas: 5, candidatos: 24, candidatosPorVaga: 4.8 }
                },
                2018: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 13, candidatosPorVaga: 2.60 },
                    universal: { vagas: 5, candidatos: 19, candidatosPorVaga: 3.80 }
                },
                2019: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 5, candidatos: 10, candidatosPorVaga: 2.00 },
                    universal: { vagas: 5, candidatos: 24, candidatosPorVaga: 4.80 }
                },
                2020: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 12, candidatosPorVaga: 1.33 },
                    universal: { vagas: 11, candidatos: 29, candidatosPorVaga: 2.64 }
                },
                2021: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 6, candidatos: 11, candidatosPorVaga: 1.83 },
                    universal: { vagas: 6, candidatos: 19, candidatosPorVaga: 3.17 }
                },
                2022: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 9, candidatos: 11, candidatosPorVaga: 1.22 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 12, candidatosPorVaga: 1.33 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 9, candidatos: 4, candidatosPorVaga: 0.44 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 9, candidatosPorVaga: 1.00 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 3, candidatos: 9, candidatosPorVaga: 3.00 },
                    pcd: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    universal: { vagas: 9, candidatos: 7, candidatosPorVaga: 0.78 }
                },
                2025: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 3, candidatos: 10, candidatosPorVaga: 3.33 },
                    pcd: { vagas: 1, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 9, candidatos: 9, candidatosPorVaga: 1.00 }
                }
            }
        },
        {
            id: 44,
            nome: 'Serviço Social - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 2, candidatos: 10, candidatosPorVaga: 5 },
                    publica: { vagas: 6, candidatos: 81, candidatosPorVaga: 13.5 },
                    universal: { vagas: 8, candidatos: 79, candidatosPorVaga: 9.875 }
                },
                2017: {
                    negro: { vagas: 2, candidatos: 8, candidatosPorVaga: 4 },
                    publica: { vagas: 6, candidatos: 48, candidatosPorVaga: 8 },
                    universal: { vagas: 8, candidatos: 58, candidatosPorVaga: 7.25 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3.00 },
                    publica: { vagas: 7, candidatos: 52, candidatosPorVaga: 7.43 },
                    universal: { vagas: 8, candidatos: 56, candidatosPorVaga: 7.00 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 7, candidatosPorVaga: 7.00 },
                    publica: { vagas: 7, candidatos: 58, candidatosPorVaga: 8.29 },
                    universal: { vagas: 8, candidatos: 68, candidatosPorVaga: 8.50 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 7, candidatosPorVaga: 2.33 },
                    publica: { vagas: 14, candidatos: 42, candidatosPorVaga: 3.00 },
                    universal: { vagas: 16, candidatos: 50, candidatosPorVaga: 3.13 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 5, candidatosPorVaga: 2.50 },
                    publica: { vagas: 7, candidatos: 44, candidatosPorVaga: 6.29 },
                    universal: { vagas: 8, candidatos: 33, candidatosPorVaga: 4.13 }
                },
                2022: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 13, candidatos: 18, candidatosPorVaga: 1.38 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 13, candidatos: 17, candidatosPorVaga: 1.31 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 13, candidatos: 25, candidatosPorVaga: 1.92 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 13, candidatos: 17, candidatosPorVaga: 1.31 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 4, candidatos: 15, candidatosPorVaga: 3.75 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 13, candidatos: 12, candidatosPorVaga: 0.92 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 4, candidatos: 10, candidatosPorVaga: 2.50 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 13, candidatos: 13, candidatosPorVaga: 1.00 }
                }
            }
        },
        {
            id: 45,
            nome: 'Turismo - Matutino',
            cotas: {
                2016: {
                    negro: { vagas: 1, candidatos: 3, candidatosPorVaga: 3 },
                    publica: { vagas: 6, candidatos: 13, candidatosPorVaga: 2.167 },
                    universal: { vagas: 7, candidatos: 40, candidatosPorVaga: 5.714 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 4, candidatos: 19, candidatosPorVaga: 4.75 },
                    universal: { vagas: 5, candidatos: 29, candidatosPorVaga: 5.8 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1.00 },
                    publica: { vagas: 8, candidatos: 14, candidatosPorVaga: 1.75 },
                    universal: { vagas: 9, candidatos: 18, candidatosPorVaga: 2.00 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 6, candidatos: 18, candidatosPorVaga: 3.00 },
                    universal: { vagas: 8, candidatos: 25, candidatosPorVaga: 3.13 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 12, candidatos: 7, candidatosPorVaga: 0.58 },
                    universal: { vagas: 15, candidatos: 14, candidatosPorVaga: 0.93 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 6, candidatos: 5, candidatosPorVaga: 0.83 },
                    universal: { vagas: 7, candidatos: 8, candidatosPorVaga: 1.14 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 12, candidatos: 9, candidatosPorVaga: 0.75 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 10, candidatosPorVaga: 0.91 }
                },
                2023: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 12, candidatos: 8, candidatosPorVaga: 0.67 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 11, candidatos: 7, candidatosPorVaga: 0.64 }
                },
                2024: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 2, candidatosPorVaga: 0.67 },
                    publica: { vagas: 4, candidatos: 7, candidatosPorVaga: 1.75 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 6, candidatosPorVaga: 0.55 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica_negro: { vagas: 3, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 4, candidatos: 1, candidatosPorVaga: 0.25 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 11, candidatos: 4, candidatosPorVaga: 0.36 }
                }
            }
        },
        {
            id: 46,
            nome: 'Zootecnia - Integral',
            cotas: {
                2016: {
                    negro: { vagas: 'n/a', candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    publica: { vagas: 8, candidatos: 70, candidatosPorVaga: 8.75 },
                    universal: { vagas: 8, candidatos: 80, candidatosPorVaga: 10 }
                },
                2017: {
                    negro: { vagas: 1, candidatos: 1, candidatosPorVaga: 1 },
                    publica: { vagas: 8, candidatos: 64, candidatosPorVaga: 8 },
                    universal: { vagas: 8, candidatos: 64, candidatosPorVaga: 8 }
                },
                2018: {
                    negro: { vagas: 1, candidatos: 5, candidatosPorVaga: 5.00 },
                    publica: { vagas: 7, candidatos: 52, candidatosPorVaga: 7.43 },
                    universal: { vagas: 9, candidatos: 68, candidatosPorVaga: 7.56 }
                },
                2019: {
                    negro: { vagas: 1, candidatos: 2, candidatosPorVaga: 2.00 },
                    publica: { vagas: 7, candidatos: 67, candidatosPorVaga: 9.57 },
                    universal: { vagas: 9, candidatos: 67, candidatosPorVaga: 7.44 }
                },
                2020: {
                    negro: { vagas: 3, candidatos: 3, candidatosPorVaga: 1.00 },
                    publica: { vagas: 14, candidatos: 44, candidatosPorVaga: 3.14 },
                    universal: { vagas: 17, candidatos: 65, candidatosPorVaga: 3.82 }
                },
                2021: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica: { vagas: 7, candidatos: 50, candidatosPorVaga: 7.14 },
                    universal: { vagas: 8, candidatos: 66, candidatosPorVaga: 8.25 }
                },
                2022: {
                    negro: { vagas: 2, candidatos: 3, candidatosPorVaga: 1.50 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 14, candidatos: 59, candidatosPorVaga: 4.21 },
                    pcd: { vagas: 2, candidatos: 'n/a', candidatosPorVaga: 'n/a' },
                    universal: { vagas: 13, candidatos: 50, candidatosPorVaga: 3.85 }
                },
                2023: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 3, candidatos: 1, candidatosPorVaga: 0.33 },
                    publica: { vagas: 14, candidatos: 58, candidatosPorVaga: 4.14 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 13, candidatos: 42, candidatosPorVaga: 3.23 }
                },
                2024: {
                    negro: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    publica_negro: { vagas: 4, candidatos: 5, candidatosPorVaga: 1.25 },
                    publica: { vagas: 5, candidatos: 50, candidatosPorVaga: 10.00 },
                    pcd: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    universal: { vagas: 14, candidatos: 47, candidatosPorVaga: 3.36 }
                },
                2025: {
                    negro: { vagas: 2, candidatos: 2, candidatosPorVaga: 1.00 },
                    publica_negro: { vagas: 4, candidatos: 3, candidatosPorVaga: 0.75 },
                    publica: { vagas: 5, candidatos: 58, candidatosPorVaga: 11.60 },
                    pcd: { vagas: 2, candidatos: 1, candidatosPorVaga: 0.50 },
                    universal: { vagas: 14, candidatos: 66, candidatosPorVaga: 4.71 }
                }
            }
        }
    ]
}