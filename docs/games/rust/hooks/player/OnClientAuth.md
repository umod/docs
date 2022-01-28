---
hide_table_of_contents: true
---

# OnClientAuth

## Usage

* Called when the player is giving server connection authorization information
* No return behavior

## Examples

```csharp title=""
void OnClientAuth(Network.Connection connection)
{
    Puts("OnClientAuth works!");
}
```
