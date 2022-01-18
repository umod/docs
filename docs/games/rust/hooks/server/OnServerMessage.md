---
hide_table_of_contents: true
---

# OnServerMessage

## Usage

* Called before a SERVER message is sent to a player
* Return a non-null value to stop message from being sent

## Examples

```csharp title="Stop message from being sent and log"
object OnServerMessage(string message, string playerName, string color, ulong playerId)
{
    if (message.Contains("gave"))
    {
        Puts($"Message to {playerName} ({playerId}) cancelled");
        returm false;
    }

    return null;
}
```

```csharp title="Allow message to be sent, but log"
void OnServerMessage(string message, string playerName, string color, ulong playerId)
{
    Puts($"{playerName} ({playerId}) was sent message: {message}");
}
```
