import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // console.log(node.data.target.fields.file.url);
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          // src={node.data.target.fields.file.url}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          // height={540}
          // width={960}
          alt={node.data.target.fields.title}
        />
      );
    },
  },
};
