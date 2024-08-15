import { grey } from '@mui/material/colors';

const Tag = ({ label }: { label: string }) => {
  return (
    <div
      style={{
        padding: 4,
        backgroundColor: grey[500],
        borderRadius: 4,
        margin: 4,
      }}
    >
      <span
        style={{
          color: "white",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default Tag;
