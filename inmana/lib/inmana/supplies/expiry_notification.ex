defmodule Inmana.Supplies.ExpiryNotification do
  @moduledoc """
  Sends expiration email to registered restaurants concorrently
  """

  alias Inmana.Mailer
  alias Inmana.Supplies.{ExpirationEmail, GetByExpiration}

  def send do
    data = GetByExpiration.call()

    data
    |> Task.async_stream(fn {email, supps} -> send_email(email, supps) end)
    |> Stream.run()
  end

  def send_email(to_email, supplies) do
    to_email
    |> ExpirationEmail.create(supplies)
    |> Mailer.deliver_later!()
  end
end
