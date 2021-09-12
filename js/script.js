const hewan = {
  nama: "Kambing Etawa",
  harga: {
    jantan: {
      enamBulan: "1.500.000",
      duaBelasBulan: "2.500.000",
    },
    betina: {
      enamBulan: "1.800.000",
      duaBelasBulan: "2.700.000",
    },
  },
  makan() {
    return "Alhamdulillah, kenyang.";
  },
};

const jantan12Bulan = hewan.harga.jantan.duaBelasBulan;
console.log(jantan12Bulan);

const betina6Bulan = hewan.harga.betina["enamBulan"];
console.log(betina6Bulan);
