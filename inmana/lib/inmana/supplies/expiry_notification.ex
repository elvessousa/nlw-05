defmodule Inmana.Supplies.ExpiryNotification do
  @moduledoc """
    Sends expiration email to registered restaurants
  """

  alias Inmana.Mailer
  alias Inmana.Supplies.{ExpirationEmail, GetByExpiration}

  def send do
    data = GetByExpiration.call()

    Enum.each(data, fn {to_email, supplies} -> 
      to_email
      |> ExpirationEmail.create(supplies)
      |> Mailer.deliver_later!()
    end)
  end
  
end
