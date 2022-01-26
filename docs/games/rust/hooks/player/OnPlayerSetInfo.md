---
hide_table_of_contents: true
---

# OnPlayerSetInfo

## Usage

* Called when setting player's information (aka console variables)
* No Return behavior

## Examples

```csharp title=""
void OnPlayerSetInfo(Connection connection, string key, string value)
{
    Puts($"{connection.userid}: {key} was set to {value}");
}
```
