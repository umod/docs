---
hide_table_of_contents: true
---

# OnPlayerSetInfo

## Usage

* Called when setting player's information (aka console variables)
* No return behavior

## Examples

```csharp title=""
void OnPlayerSetInfo(Network.Connection connection, string key, string value)
{
    Puts($"{connection.userid}: {key} was set to {value}");
}
```
