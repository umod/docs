---
hide_table_of_contents: true
---

# OnServerMessage

## Usage

* Called before a server message is sent to all connected players
* Return a non-null value to stop message from being sent

## Examples

```csharp title="Stop message from being sent"
object OnServerMessage(string message, string prefix, string color, ulong steamId)
{
    if (message.Contains("gave"))
    {
        return false;
    }

    return null;
}
```

```csharp title="Allow message to be sent, but log"
void OnServerMessage(string message, string prefix, string color, ulong steamId)
{
    Puts($"{prefix}: {message}");
}
```
