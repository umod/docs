---
hide_table_of_contents: true
---

# OnUserCommand

## Usage

* Useful for intercepting players' commands before their handling
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnUserCommand(IPlayer player, string command, string[] args)
{
    Puts("OnUserCommand works!");
    return null;
}
```
