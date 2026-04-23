const ServiceCard = ({ title, description, features, icon }) => {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      {features && (
        <ul style={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    height: '100%',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    color: '#1E3A5F',
    marginBottom: '1rem',
  },
  description: {
    color: '#6B7B8B',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  features: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  },
};

export default ServiceCard;