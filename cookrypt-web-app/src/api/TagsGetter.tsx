import { useReadContract } from "wagmi";
import { cookryptMainContractConfig } from "./abis";
import Tag from "../components/Tag";

const TagsGetter = (props: { address: `0x${string}` }) => {
  const { data } = useReadContract({
    ...cookryptMainContractConfig,
    functionName: "getUserTagsByAddress",
    args: [props.address],
  });

  const getTagList= (data: readonly string[] | undefined) => {
    if (!data || data.length == 0) {
      return <div></div>
    }
    const last = data[data.length - 1];
    const tagList = last.split(';');
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        {tagList.map((d, i) => (
          <Tag key={i} label={d} />
        ))}
      </div>
    )
  }
  return getTagList(data);
};

export default TagsGetter;
