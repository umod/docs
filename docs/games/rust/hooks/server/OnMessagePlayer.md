---
hide_table_of_contents: true
---

# OnMessagePlayer

## Usage

* Called before a server message is sent to a specific player
* Return a non-null value to stop message from being sent

## Examples

```csharp title="Stop message from being sent"
object OnMessagePlayer(string message, BasePlayer player)
{
    if (message.Contains("gave"))
    {
        Puts($"Message to {player.displayName} ({player.userID}) cancelled");
        return false;
    }

    return null;
}
```

```csharp title="Allow message to be sent, but log"
void OnMessagePlayer(string message, BasePlayer player)
{
    Puts($"{player.displayName} ({player.userID}) was sent message: {message}");
}
```
