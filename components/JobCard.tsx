const JobCard = ({ job }: { job: string }) => {
  return (
    <div className="bg-white text-center p-6 rounded-xl shadow-card">
      {" "}
      <h4 className="text-lg font-medium text-foreground mb-2">{job}</h4>
      <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
