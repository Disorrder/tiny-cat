FROM postgres:17-alpine

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=tiny-cat

# Copy any initialization scripts if needed
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432

# The default command will start PostgreSQL
CMD ["postgres"]