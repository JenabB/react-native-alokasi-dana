//menformat number menjadi format rupiah
import "intl";
import "intl/locale-data/jsonp/id";

const formatRp = (nominal: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(nominal)
    .replace(/(\.|,)00$/g, "");
};

export default formatRp;
