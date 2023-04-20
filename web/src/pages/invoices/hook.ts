import { useState } from "react";
import { InvoicesDataType } from "../../dtos/data-list";
const useAction = () => {
  const [navigation, setNavigation] = useState(["上传发票", "发票列表"]);
  const [dataSource, setDataSource] = useState<InvoicesDataType[]>([
    {
      key: "1",
      uploadDate: "2023-1-12",
      invoice: [
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      ],
      invoiceType: "旅游基金-餐费",
      isEffective: true,
      isShowImg: false,
    },
    {
      key: "2",
      uploadDate: "2023-1-12",
      invoice: [
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      ],
      invoiceType: "旅游基金-住宿",
      isEffective: false,
      isShowImg: false,
    },
    {
      key: "3",
      uploadDate: "2023-1-12",
      invoice: [
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      ],
      invoiceType: "旅游基金-出行",
      isEffective: true,
      isShowImg: false,
    },
    {
      key: "4",
      uploadDate: "2023-1-12",
      invoice: [
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      ],
      invoiceType: "体检费用",
      isEffective: true,
      isShowImg: false,
    },
    {
      key: "5",
      uploadDate: "2023-1-12",
      invoice: [
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
      ],
      invoiceType: "差旅费用",
      isEffective: true,
      isShowImg: false,
    },
  ]);

  const setImgShow = (index: number, value?: boolean) => {
    let newData = dataSource;
    value
      ? (newData[index].isShowImg = value)
      : (newData[index].isShowImg = !newData[index].isShowImg);
    setDataSource([...newData]);
  };

  return {
    navigation,
    dataSource,
    setNavigation,
    setImgShow,
  };
};

export default useAction;
