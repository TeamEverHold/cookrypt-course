import { useReadContract } from "wagmi";
import { cookryptMainContractConfig } from "./abis";

const TagsGetter = (props: { address: `0x${string}` }) => {
  const { data } = useReadContract({
    ...cookryptMainContractConfig,
    functionName: "getUserTagsByAddress",
    args: [props.address],
  });
  return <span>{data}</span>;
};

export default TagsGetter;
